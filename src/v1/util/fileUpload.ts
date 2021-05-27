import { RequestHandler } from "express";
import {
  success as resSuccess,
  error as resError,
} from "../../helper/responseH";

export const fileUpload: RequestHandler = (req, res) => {
  if (req.file) {
    return res.status(200).json(resSuccess("File uploded", 200, req.file));
  } else {
    return res.status(404).json(resError("File not found", 404));
  }
};
