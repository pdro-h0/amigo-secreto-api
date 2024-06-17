import { RequestHandler } from "express";
import z from "zod";
import { makeUpdatePersonFactories } from "../../services/factories/people/make-update-person-factories";
import { makeGetPersonFactories } from "../../services/factories/people/make-get-person-factories";

export const updatePerson: RequestHandler = async (req, res) => {
  const updatePersonParamsSchema = z.object({
    eventId: z.coerce.number(),
    groupId: z.coerce.number(),
    id: z.coerce.number(),
  });

  const updatePersonBodySchema = z.object({
    name: z.string().optional(),
    cpf: z
      .string()
      .transform((val) => val.replace(/\.|-/gm, ""))
      .optional(),
    matched: z.string().optional(),
  });

  const { eventId, groupId, id } = updatePersonParamsSchema.parse(req.params);
  const { name, cpf, matched } = updatePersonBodySchema.parse(req.body);

  const updatePersonService = makeUpdatePersonFactories();
  const getPersonService = makeGetPersonFactories();

  const updatedPerson = await updatePersonService.execute(
    {
      cpf,
      matched,
      name,
    },
    eventId,
    groupId,
    id
  );

  if (updatedPerson) {
    const { person } = await getPersonService.execute(eventId, groupId, id);

    return res.json({ person });
  }
};
