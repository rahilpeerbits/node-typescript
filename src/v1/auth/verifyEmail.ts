import { RequestHandler } from "express";
import user from "../../model/user";
import {
  success as resSuccess,
  error as resError,
} from "../../helper/responseH";

export const verifyEmail: RequestHandler = async (req, res) => {
  if (!req.query.token) {
    return res.status(404).send(resError("Token not found", 404));
  }
  const userData = await user.findOne({
    emailToken: req.query.token?.toString(),
  });
  if (userData !== null) {
    userData.verified = true;
    userData.emailToken = "";
    userData.save();
    return res.status(200).send(resSuccess("Email verified", 200));
  } else {
    return res.status(400).send(resError("Invalid token", 400));
  }
};
