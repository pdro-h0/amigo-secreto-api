import { Router } from "express";
import { auth } from "../controllers/user/auth";
import { validate } from "../middlewres/validate";

const router = Router()

router.get("/ping",validate ,(req, res) => res.json({ pong: true, admin: true }));
router.post("/login", auth)

export default router