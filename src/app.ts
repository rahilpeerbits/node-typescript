import express from "express";
import { connect } from "./config/db";
import { config } from "./config/config";
import version from "./v1/route";
import multer from "multer";
import { error as resError } from "./helper/responseH";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

const app = express();

const options = {
  origin: "http://localhost",
  credentials: true,
};

app.use(cors(options));

const port = config.APP_PORT;

// DB connection
const db = connect();

if (db) {
  db.once("open", async () => {
    console.log("Connected to database");
    app.listen(port, () => {
      return console.log(`server is listening on ${port}`);
    });
  });
}

// Body parser for POST params
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());

// For File Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("file"));

// Routes
app.use("/v1", version);

// Centralized error handler
app.use((err: any, req: any, res: any, next: any) => {
  // Joi error handler for json response
  if (err && err.error && err.error.isJoi) {
    return res
      .status(400)
      .json(resError(err.error.toString(), 400, err.error?.details));
  } else {
    next(err);
  }
});

// Default Route for index page
app.get("/", (req, res) => {
  res.send("App working");
});

export default app;
