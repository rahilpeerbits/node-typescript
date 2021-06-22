import { RequestHandler } from "express";
import * as admin from "firebase-admin";
import { notification as fcm } from "../../helper/notificationH";
import {
  success as resSuccess,
  error as resError,
} from "../../helper/responseH";

export const notification: RequestHandler = async (req, res) => {
  const device = ["test", "test1"];
  let sent: boolean = false;
  await fcm(device, "Title of notification", "Message string").then(
    (response) => {
      sent = response;
    }
  );
  return res.status(200).json(resSuccess("Notification sent", 200, { sent }));
};
