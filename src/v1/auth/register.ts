import { RequestHandler, Router } from "express";
import user from "../../model/user";
import CryptoJS from "crypto-js";
import Joi from "joi";
import { v4 as uuidv4 } from "uuid";
import mail from "../../helper/sendmail";
import {
  success as resSuccess,
  error as resError,
} from "../../helper/responseH";

export const register: RequestHandler = async (req, res) => {
  if ((await user.findOne({ email: req.body.email }).exec()) !== null) {
    return res.status(400).send(resError("Email already in use", 400));
  }
  const token = uuidv4();
  const u = new user({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: CryptoJS.MD5(req.body.password),
    image: req.body.image,
    verified: false,
    emailToken: token,
  });
  if (u.save()) {
    mail(
      req.body.email,
      "Verify email",
      "Token:" +
        req.protocol +
        "://" +
        req.get("host") +
        "/v1/auth/verify-email?token=" +
        token
    );
    return res.status(200).send(resSuccess("User created", 200));
  }
  return res.status(500).send(resError("Unable to create user", 500));
};

export const validatonHandler = Joi.object({
  email: Joi.string().email().min(3).max(250).required(),
  password: Joi.string().min(3).max(20).required(),
  firstName: Joi.string().min(3).max(20).required(),
  lastName: Joi.string().min(3).max(20).required(),
  image: Joi.string().min(3).required(),
});
