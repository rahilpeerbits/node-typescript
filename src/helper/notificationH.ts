import { RequestHandler } from "express";
import * as admin from "firebase-admin";
import { success as resSuccess, error as resError } from "./responseH";

export const notification = async (
  deviceIds: string[] = [],
  title: string = "",
  message: string = ""
) => {
  const cred = require("../../test-xyyftf-firebase-adminsdk.json");
  const app = admin.initializeApp(
    {
      credential: admin.credential.cert(cred),
    },
    "tttt"
  ); // tttt is App name
  const messaging = app.messaging();
  const payload = {
    notification: {
      title,
      body: message,
    },
    data: {},
  };
  return await messaging
    .sendToDevice(deviceIds, payload)
    .then((result) => {
      app.delete();
      if (result.failureCount === 0) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      app.delete();
      return false;
    });
};
