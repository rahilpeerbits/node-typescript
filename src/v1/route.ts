import { Router } from "express";
import authRoutes from "./auth/route";
import userRoutes from "./user/route";

const router = Router();

// Health status
router.get("/status", (req, res) => res.json({ status: "MOBILE V1 UP" }));

router.use("/auth", authRoutes);

router.use("/user", userRoutes);

export default router;
