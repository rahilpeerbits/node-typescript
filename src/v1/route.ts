import { Router } from "express";
import authRoutes from "./auth/route";

const router = Router();

// Health status
router.get("/status", (req, res) => res.json({ status: "MOBILE V1 UP" }));

router.use("/auth", authRoutes);

export default router;
