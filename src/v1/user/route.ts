import { Router } from "express";
import handleError from "../../middleware/handle-error";
import jwtVerify from "../../middleware/jwt-verify";
import { profile } from "./profile";
import { createValidator } from "express-joi-validation";

const router = Router();
const validator = createValidator({ passError: true });

router.get("/profile", jwtVerify, handleError(profile));

export default router;
