import { Router } from "express";
import handleError from "../../middleware/handle-error";
import { login } from "./login";
import { register } from "./register";

const router = Router();

router.post("/login", handleError(login));
router.post("/register", handleError(register));

export default router;
