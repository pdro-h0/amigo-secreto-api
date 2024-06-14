import { RequestHandler } from "express";
import z from "zod";
import { makeAddPersonFactories } from "../../services/factories/people/make-add-person-factories";

export const addPerson: RequestHandler = async (req, res) => {
  const addPersonParamsSchema = z.object({
    eventId: z.coerce.number(),
    groupId: z.coerce.number(),
  });

  const addPersonBodySchema = z.object({
    cpf: z.string().transform((val) => val.replace(/\.|-/gm, "")),
    name: z.string(),
  });

  const { eventId, groupId } = addPersonParamsSchema.parse(req.params);
  const { name, cpf } = addPersonBodySchema.parse(req.body);

  const addPersonService = makeAddPersonFactories();

  const { newPerson } = await addPersonService.execute({
    cpf,
    eventId,
    groupId,
    name,
  });

  return res.status(201).json({ newPerson });
};
