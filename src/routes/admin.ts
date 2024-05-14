import { Router } from "express";
import { auth } from "../controllers/user/auth";

const router = Router()

router.get("/ping", (req, res) => res.json({ pong: true }));
router.post("/login", auth)

export default router