import { NextFunction, Request, RequestHandler, Response } from "express";
import JWT from "jsonwebtoken";
import { config } from "../config/config";
import { error as resError } from "../helper/responseH";

/**
 * This router wrapper catches any error from async await
 * and throws it to the default express error handler,
 * instead of crashing the app
 *
 * @param handler Request handler to check for error
 */
const jwtVerify = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    JWT.verify(authHeader, config.JWT_KEY, (err: any, user: any) => {
      if (err) {
        return res.status(401).send(resError("Invalid token", 401));
      }

      req.body.user = user.userData;
      next();
    });
  } else {
    return res.status(404).send(resError("Token not available", 404));
  }
};
export default jwtVerify;
