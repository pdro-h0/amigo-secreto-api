import { RequestHandler } from "express";
import z from "zod";
import { makeAddGroupFactories } from "../../services/factories/make-add-group-factories";

export const addGroup:RequestHandler = async (req, res) =>{
    const addGroupParamsSchema = z.object({
        eventId: z.coerce.number()
    })

    const addGroupBodySchema = z.object({
        name: z.string()
    })

    const { eventId } = addGroupParamsSchema.parse(req.params)
    const { name } = addGroupBodySchema.parse(req.body);

    const addGroupService = makeAddGroupFactories()

    const newGroup = await addGroupService.execute(name, eventId);

    return res.status(201).json({newGroup})
}