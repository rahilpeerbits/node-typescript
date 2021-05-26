import { Router } from "express";
import handleError from "../../middleware/handle-error";
import { login, validatonHandler } from "./login";
import { register } from "./register";
import { createValidator } from "express-joi-validation";

const router = Router();
const validator = createValidator({ passError: true });

router.post("/login", validator.body(validatonHandler), handleError(login));
router.post("/register", handleError(register));

export default router;
