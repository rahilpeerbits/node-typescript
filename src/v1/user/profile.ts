import { RequestHandler } from "express";
import user from "../../model/user";
import {
  success as resSuccess,
  error as resError,
} from "../../helper/responseH";

export const profile: RequestHandler = async (req, res) => {
  const userData = await user.findOne({ email: req.body.user.email });
  return res.status(200).send(resSuccess("User data", 200, userData));
};
