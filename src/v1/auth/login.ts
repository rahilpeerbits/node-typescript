import { RequestHandler, Response, Router } from "express";
import user from "../../model/user";
import * as _ from "lodash";
import Joi from "joi";
import {
  success as resSuccess,
  error as resError,
} from "../../helper/responseH";

export const login: RequestHandler = (req, res) => {
  const u = user;
  u.findByIdAndUpdate(
    "60accd4e66c9f97b2b550de8",
    { firstName: "rahil233" },
    { new: true },
    (err, list) => {
      if (err) {
        return res.status(500).send(resError("Error while update", 500, err));
      }
      return res.status(200).send(resSuccess("User created", 200, list));
    }
  );
};

export const validatonHandler = Joi.object({
  firstName: Joi.string().min(3).max(10).required(),
  lastName: Joi.string().min(3).max(10).required(),
  email: Joi.string().email().min(3).max(250).required(),
});
