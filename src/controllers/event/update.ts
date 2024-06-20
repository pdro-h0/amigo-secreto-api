import { RequestHandler } from "express";
import z from "zod";
import { makeUpdateEvent } from "../../services/factories/make-update-event-factories";
import { makeUpdatePersonFactories } from "../../services/factories/people/make-update-person-factories";
import { makeDoesMatchesFactories } from "../../services/factories/event/make-does-matches-factories";

export const update: RequestHandler = async (req, res) => {
  const updateEventParamsSchema = z.object({
    id: z.coerce.number()
  })

  const updateEventBodySchema = z.object({
    status: z.boolean().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    grouped: z.boolean().optional(),
  });

  const { id } = updateEventParamsSchema.parse(req.params)

  const data = updateEventBodySchema.parse(
    req.body
  );

  const updateEventService = makeUpdateEvent()
  const updatePersonService = makeUpdatePersonFactories()
  const doesMatchesService = makeDoesMatchesFactories()

  const { event } = await updateEventService.execute(id, data);

  if(event){
    if(event.status){
        const result = await doesMatchesService.execute(id)
        if(!result){
          return res.json({ error: "Grupos impossíveis de sortear" })
        }
    } else {
        await updatePersonService.execute({matched: ""}, id)
    }
  }

  return res.json({ event })
};
