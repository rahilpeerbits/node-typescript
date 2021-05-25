import { RequestHandler, Router } from "express";
import user from "../../model/user";

export const register: RequestHandler = (req, res) => {
  const u = new user({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  u.save();
  res.send({ test: 123 });
};
