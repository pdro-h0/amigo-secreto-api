import { Router } from "express";
import { auth } from "../controllers/user/auth";
import { validate } from "../middlewres/validate";
import { getAll } from "../controllers/event/get-all";
import { getOne } from "../controllers/event/get-one";

const router = Router();

router.get("/ping", validate, (req, res) =>
  res.json({ pong: true, admin: true })
);
router.post("/login", auth);
router.get("/events", validate, getAll);
router.get("/events/:id", validate, getOne)

export default router;
