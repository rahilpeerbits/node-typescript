import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export const config: IConfig = {
  DB_STRING: process.env.DB_STRING || "",
  APP_PORT: process.env.APP_PORT || 3000,
  JWT_KEY: process.env.JWT_KEY || "",
  JWT_EXPIRE_HOURS: process.env.JWT_EXPIRE_HOURS || "",
  UPLOAD_PATH: process.env.UPLOAD_PATH || "",
  MAIL_HOST: process.env.MAIL_HOST || "",
  MAIL_PORT: process.env.MAIL_PORT || "",
  MAIL_USERNAME: process.env.MAIL_USERNAME || "",
  MAIL_PASSWORD: process.env.MAIL_PASSWORD || "",
  MAIL_SECURE: process.env.MAIL_SECURE || "",
  MAIL_LOGGER: process.env.MAIL_LOGGER || "",
  MAIL_FROM: process.env.MAIL_FROM || "",
  MAIL_SENDER_NAME: process.env.MAIL_SENDER_NAME || "",
};

interface IConfig {
  DB_STRING: string;
  APP_PORT: any;
  JWT_KEY: string;
  JWT_EXPIRE_HOURS: string;
  UPLOAD_PATH: string;
  MAIL_HOST: string;
  MAIL_PORT: string;
  MAIL_USERNAME: string;
  MAIL_PASSWORD: string;
  MAIL_SECURE: string;
  MAIL_LOGGER: string;
  MAIL_FROM: string;
  MAIL_SENDER_NAME: string;
}
