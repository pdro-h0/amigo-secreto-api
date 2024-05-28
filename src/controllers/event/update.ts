import { RequestHandler } from "express";
import z from "zod";
import { makeUpdateEvent } from "../../services/factories/make-update-event-factories";

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

  const { event } = await updateEventService.execute(id, data);

  if(event){
    if((await event).status){
        //TODO FAZER O SORTEIO
    } else {
        //TODO LIMPAR O SORTEIO
    }
  }

  return res.json({ event: event })
};
