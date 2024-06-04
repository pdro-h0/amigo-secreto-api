import { RequestHandler } from "express";
import z from "zod";
import { makeGetAllGroupsFactories } from "../../services/factories/make-get-all-groups-factories";

export const getAllGroups: RequestHandler = async (req, res) => {
  const getAllParamsSchema = z.object({
    eventId: z.coerce.number(),
  });

  const { eventId } = getAllParamsSchema.parse(req.params);

  const getAllService = makeGetAllGroupsFactories();

  const groups = await getAllService.execute(eventId);

  return res.json({ groups });
};
