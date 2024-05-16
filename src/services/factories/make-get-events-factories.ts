import { PrismaEventRepository } from "../../repositories/prisma/prisma-event-repository";
import { EventsService } from "../events"

export const makeGetEventsFactories = () =>{
    const prismaEventRepository = new PrismaEventRepository()
    const eventsService = new EventsService(prismaEventRepository);

    return eventsService
}