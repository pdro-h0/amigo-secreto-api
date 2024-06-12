import { RequestHandler } from "express";
import z from "zod";
import { makeDeleteEvent } from "../../services/factories/make-delete-event-factories";
import { makeDeleteGroupFactories } from "../../services/factories/make-delete-group-factories";

export const deleteGroup: RequestHandler = async (req, res) => {
  const deleteGroupParamsSchema = z.object({
    eventId: z.coerce.number(),
    id: z.coerce.number(),
  });

  const { eventId, id } = deleteGroupParamsSchema.parse(req.params);

  const deleteGroupService = makeDeleteGroupFactories();

  await deleteGroupService.execute(eventId, id);

  return res.json({});
};
