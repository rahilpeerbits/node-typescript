import Logger from "../config/logger";

export const error = (message: string, code: number = 400, body: any = {}) => {
  Logger.error(message, body);
  return {
    status: code,
    message,
    body,
  };
};

export const success = (
  message: string,
  code: number = 200,
  body: any = {}
) => {
  return {
    status: code,
    message,
    body,
  };
};
