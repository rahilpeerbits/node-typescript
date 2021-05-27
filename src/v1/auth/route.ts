import { Router } from "express";
import handleError from "../../middleware/handle-error";
import { login, validatonHandler as loginValidatonHandler } from "./login";
import {
  register,
  validatonHandler as registerValidatonHandler,
} from "./register";
import { verifyEmail } from "./verifyEmail";
import { createValidator } from "express-joi-validation";

const router = Router();
const validator = createValidator({ passError: true });

router.post(
  "/login",
  validator.body(loginValidatonHandler),
  handleError(login)
);
router.post(
  "/register",
  validator.body(registerValidatonHandler),
  handleError(register)
);
router.get("/verify-email", handleError(verifyEmail));

export default router;
