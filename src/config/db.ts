import Mongoose from "mongoose";
import { config } from "./config";

let database: Mongoose.Connection;

export const connect = () => {
  const uri = config.DB_STRING;
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;

  database.on("error", () => {
    console.log("Error connecting to database");
    return;
  });

  return database;
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
