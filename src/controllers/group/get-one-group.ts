import { RequestHandler } from "express";
import z from "zod";
import { makeGetOneGroupFactories } from "../../services/factories/make-get-one-group-factories";

export const getOneGroup: RequestHandler = async (req, res) => {
  const getOneParamsSchema = z.object({
    eventId: z.coerce.number(),
    id: z.coerce.number(),
  });

  const { eventId, id } = getOneParamsSchema.parse(req.params);

  const getOneService = makeGetOneGroupFactories();

  const { group }  = await getOneService.execute(eventId, id);

  return res.json({ group: group });
};
