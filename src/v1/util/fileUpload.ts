import { RequestHandler } from "express";
import {
  success as resSuccess,
  error as resError,
} from "../../helper/responseH";

export const fileUpload: RequestHandler = (req, res) => {
  return res.status(200).json(resSuccess("File uploded", 200, req.file));
};
