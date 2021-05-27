import { Router } from "express";
import handleError from "../../middleware/handle-error";
import { fileUpload } from "./fileUpload";

const router = Router();

router.post("/file-upload", handleError(fileUpload));

export default router;
