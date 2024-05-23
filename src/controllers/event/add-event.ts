import { RequestHandler } from "express";
import z from "zod";
import { makeAddEventFactories } from "../../services/factories/make-add-events-factories";

export const addEvent: RequestHandler = async (req, res) => {
  const addEventBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    grouped: z.boolean(),
  });

  const { description, title, grouped } = addEventBodySchema.parse(req.body);

  const addEventService = makeAddEventFactories();

  const event = await addEventService.execute({
    description,
    title,
    grouped,
  });

  return res.status(201).json({ event: event });
};
