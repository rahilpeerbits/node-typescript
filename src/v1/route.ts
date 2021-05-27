import { Router } from "express";
import authRoutes from "./auth/route";
import userRoutes from "./user/route";
import utilRoutes from "./util/route";

const router = Router();

router.use("/auth", authRoutes);

router.use("/user", userRoutes);

router.use("/util", utilRoutes);

export default router;
