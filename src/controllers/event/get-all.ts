import { RequestHandler } from "express";
import { makeGetEventsFactories } from "../../services/factories/make-get-events-factories";

export const getAll:RequestHandler = async (req, res) =>{
    const getEventsRepository = makeGetEventsFactories()

    const items = await getEventsRepository.execute()

    if(items) return res.json({ events: items })

        return res.json({ error: "Ocorreu um erro" })

    
}