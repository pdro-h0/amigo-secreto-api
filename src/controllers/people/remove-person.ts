import { RequestHandler } from "express";
import z from "zod";
import { makeRemovePerosnFactories } from "../../services/factories/people/make-remove-person-factories";

export const removePerson: RequestHandler = async (req, res) => {
  const removePersonParamsSchema = z.object({
    id: z.coerce.number(),
    eventId: z.coerce.number(),
    groupId: z.coerce.number(),
  });

  const { id, eventId, groupId } = removePersonParamsSchema.parse(req.params);

  const removePersonService = makeRemovePerosnFactories();

  await removePersonService.execute(id, eventId, groupId);

  return res.json({});
};
