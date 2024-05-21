import { RequestHandler } from "express";
import z from "zod";
import { makeGetOneEventFactories } from "../../services/factories/make-get-one-event-factories";

export const getOne: RequestHandler = async (req, res) => {
  const getOneParamsSchema = z.object({
    id: z.coerce.number(),
  });

  const { id } = getOneParamsSchema.parse(req.params);

  const getOneEventService = makeGetOneEventFactories();

  const { event } = await getOneEventService.execute(id);

  return res.json({ event: event });
};
