import { NextFunction, Request, RequestHandler, Response } from "express";
import JWT from "jsonwebtoken";
import { config } from "../config/config";
import { error as resError } from "../helper/responseH";
import user from "../model/user";

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
    JWT.verify(authHeader, config.JWT_KEY, async (err: any, userD: any) => {
      if (err) {
        return res.status(401).send(resError("Invalid token", 401));
      }
      const vuser = await user.findOne({ email: userD.userData.email });
      if (vuser && vuser.verified === false) {
        return res.status(401).send(resError("User email not verified", 401));
      }
      req.body.user = userD.userData;
      next();
    });
  } else {
    return res.status(404).send(resError("Token not available", 404));
  }
};
export default jwtVerify;
