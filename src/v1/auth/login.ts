import { RequestHandler, Router } from "express";
import user from "../../model/user";
import * as _ from "lodash";

export const login: RequestHandler = (req, res) => {
  const u = user;
  u.findByIdAndUpdate(
    "60accd4e66c9f97b2b550de8",
    { firstName: "rahil233" },
    { new: true },
    (err, list) => {
      res.send({ list });
    }
  );
};
