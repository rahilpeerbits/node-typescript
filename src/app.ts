import express from "express";
import { connect } from "./config/db";
import { config } from "./config/config";
import version from "./v1/route";
import multer from "multer";

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

// Default Route for index page
app.get("/", (req, res) => {
  res.send("App working");
});
