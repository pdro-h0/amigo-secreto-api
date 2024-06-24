import { RequestHandler } from "express";
import z from "zod";
import { makeGetPersonFactories } from "../../services/factories/people/make-get-person-factories";
import { decryptMatch } from "../../utils/match";

export const searchPerson: RequestHandler = async (req, res) => {
  const searchPersonQuerySchema = z.object({
    cpf: z.string().transform((val) => val.replace(/\.|-/gm, "")),
  });

  const searchPersonParamsSchema = z.object({
    eventId: z.coerce.number(),
  });

  const { cpf } = searchPersonQuerySchema.parse(req.query);
  const { eventId } = searchPersonParamsSchema.parse(req.params);

  const getOnePersonService = makeGetPersonFactories();

  const { person } = await getOnePersonService.execute(
    eventId,
    undefined,
    undefined,
    cpf
  );

  if (person && person.matched) {
    const matchId = decryptMatch(person.matched);

    const personMatched = await getOnePersonService.execute(eventId, undefined, +matchId);

    if (personMatched) {
      return res.json({
        person: {
          id: person.id,
          name: person.name,
        },
        personMatched: {
          id: personMatched.person?.id,
          name: personMatched.person?.name,
        },
      });
    }
  }

  return res.status(400).json({ error: "Ocorreu um erro" });
};
