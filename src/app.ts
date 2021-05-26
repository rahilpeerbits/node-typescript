import express from "express";
import { connect } from "./config/db";
import { config } from "./config/config";
import version from "./v1/route";
import multer from "multer";
import { error as resError } from "./helper/responseH";

const app = express();
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
// app.use(multer);  // For File Upload

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
