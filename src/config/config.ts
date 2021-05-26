import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export const config: IConfig = {
  DB_STRING: process.env.DB_STRING || "",
  APP_PORT: process.env.APP_PORT || 3000,
  JWT_KEY: process.env.JWT_KEY || "",
};

interface IConfig {
  DB_STRING: string;
  APP_PORT: any;
  JWT_KEY: string;
}
