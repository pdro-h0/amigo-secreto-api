import { RequestHandler } from "express";
import z from "zod";
import { makeGetAllPeopleFactories } from "../../services/factories/people/make-get-all-people-factories";

export const getAllPeople: RequestHandler = async (req, res) => {
  const getAllPeopleParamsSchema = z.object({
    eventId: z.coerce.number(),
    groupId: z.coerce.number(),
  });

  const { eventId, groupId } = getAllPeopleParamsSchema.parse(req.params);

  const getAllPeopleService = makeGetAllPeopleFactories();

  const people = await getAllPeopleService.execute(eventId, groupId);

  return res.json({ people });
};
