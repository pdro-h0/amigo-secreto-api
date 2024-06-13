import { RequestHandler } from "express";
import z from "zod";
import { makeGetPersonFactories } from "../../services/factories/people/make-get-person-factories";

export const getPerson: RequestHandler = async (req, res) => {
  const getPersonParamsSchema = z.object({
    eventId: z.coerce.number(),
    groupId: z.coerce.number().optional(),
    id: z.coerce.number().optional(),
    cpf: z.string().optional(),
  });

  const { eventId, cpf, groupId, id } = getPersonParamsSchema.parse(req.params);

  const getPersonService = makeGetPersonFactories();

  const { person } = await getPersonService.execute(eventId, groupId, id, cpf);

  return res.json({ person });
};
