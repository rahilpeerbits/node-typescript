import { RequestHandler } from "express";
import user from "../../model/user";
import * as _ from "lodash";
import Joi from "joi";
import JWT from "jsonwebtoken";
import { config } from "../../config/config";
import {
  success as resSuccess,
  error as resError,
} from "../../helper/responseH";
import CryptoJS from "crypto-js";

export const login: RequestHandler = (req, res) => {
  const u = user;
  u.findOne({ email: req.body.email }, (err: any, userData: any) => {
    if (err) {
      return res
        .status(500)
        .send(resError("Error while accessing data", 500, err));
    }
    if (!userData) {
      return res.status(404).send(resError("User not exist", 404));
    }
    if (userData.password === CryptoJS.MD5(req.body.password).toString()) {
      const token = JWT.sign({ userData }, config.JWT_KEY, {
        expiresIn: 60 * 60 * parseInt(config.JWT_EXPIRE_HOURS, 10),
      });
      return res.status(200).send(
        resSuccess("Login Successful", 200, {
          token,
          userData: {
            _id: userData._id,
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
          },
        })
      );
    } else {
      return res.status(401).send(resSuccess("Wrong password", 401));
    }
  });
};

export const validatonHandler = Joi.object({
  email: Joi.string().email().min(3).max(250).required(),
  password: Joi.string().min(3).max(20).required(),
});
