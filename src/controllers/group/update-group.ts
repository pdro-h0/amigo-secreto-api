import { RequestHandler } from "express";
import z from "zod";
import { makeUpdateGroupFactories } from "../../services/factories/make-update-group-factories";

export const updateGroup: RequestHandler = async (req, res) => {
  const updateGroupParamsSchema = z.object({
    eventId: z.coerce.number(),
    id: z.coerce.number(),
  });

  const updateGroupBodySchema = z.object({
    name: z.string(),
  });

  const { eventId, id } = updateGroupParamsSchema.parse(req.params);
  const { name } = updateGroupBodySchema.parse(req.body);

  const updateGroupService = makeUpdateGroupFactories();

  const updatedGroup = await updateGroupService.execute(eventId, id, {
    name,
  });

  return res.json({ group: updatedGroup });
};
