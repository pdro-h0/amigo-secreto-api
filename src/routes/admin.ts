import { Router } from "express";

import { validate } from "../middlewres/validate";

import { auth } from "../controllers/user/auth";
import { getAll } from "../controllers/event/get-all";
import { getOne } from "../controllers/event/get-one";
import { addEvent } from "../controllers/event/add-event";
import { update } from "../controllers/event/update";
import { remove } from "../controllers/event/delete";
import { getOneGroup } from "../controllers/group/get-one-group";
import { getAllGroups } from "../controllers/group/get-all-groups";
import { addGroup } from "../controllers/group/add-group";
import { updateGroup } from "../controllers/group/update-group";
import { deleteGroup } from "../controllers/group/delete-group";
import { getAllPeople } from "../controllers/people/get-all-people";
import { getPerson } from "../controllers/people/get-person";

const router = Router();

router.get("/ping", validate, (req, res) =>
  res.json({ pong: true, admin: true })
);

router.post("/login", auth);
router.get("/events", validate, getAll);
router.get("/events/:id", validate, getOne);
router.post("/events", validate, addEvent);
router.put("/events/:id", validate, update);
router.delete("/events/:id", validate, remove);

router.get("/events/:eventId/groups", validate, getAllGroups);
router.get("/events/:eventId/groups/:id", validate, getOneGroup);
router.put("/events/:eventId/groups/:id", validate, updateGroup);
router.post("/events/:eventId/groups", validate, addGroup);
router.delete("/events/:eventId/groups/:id", validate, deleteGroup);

router.get("/events/:eventId/groups/:groupId/people", validate, getAllPeople);
router.get("/events/:eventId/groups/:groupId/people/:id", validate, getPerson);

export default router;
