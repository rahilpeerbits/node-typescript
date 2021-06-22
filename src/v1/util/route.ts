import { Router } from "express";
import handleError from "../../middleware/handle-error";
import { fileUpload } from "./fileUpload";
import { notification } from "./notification";

const router = Router();

router.post("/file-upload", handleError(fileUpload));
router.post("/notification", handleError(notification));

export default router;
