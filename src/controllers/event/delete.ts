import { RequestHandler } from "express";
import z from "zod";
import { makeDeleteEvent } from "../../services/factories/make-delete-event-factories";

export const remove: RequestHandler = async (req, res) => {
  const deleteEventParamsSchema = z.object({
    id: z.coerce.number(),
  });

  const { id } = deleteEventParamsSchema.parse(req.params);

  const deleteEventService = makeDeleteEvent();

  const event = await deleteEventService.execute(id);

  res.json({ event: event });
};
