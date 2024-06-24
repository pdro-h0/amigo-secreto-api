import { Router } from "express";
import { getOne } from "../controllers/event/get-one";
import { searchPerson } from "../controllers/people/search-person";

const router = Router();

router.get("/ping", (req, res) => res.json({ pong: true }));

router.get("/events/:id", getOne)
router.get("/events/:eventId/search", searchPerson)

export default router;
