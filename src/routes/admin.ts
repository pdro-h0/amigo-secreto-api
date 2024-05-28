import { Router } from "express";

import { validate } from "../middlewres/validate";

import { auth } from "../controllers/user/auth";
import { getAll } from "../controllers/event/get-all";
import { getOne } from "../controllers/event/get-one";
import { addEvent } from "../controllers/event/add-event";
import { update } from "../controllers/event/update";

const router = Router();

router.get("/ping", validate, (req, res) =>
  res.json({ pong: true, admin: true })
);

router.post("/login", auth);
router.get("/events", validate, getAll);
router.get("/events/:id", validate, getOne);
router.post("/events", validate, addEvent);
router.put("/events/:id", validate, update);

export default router;
