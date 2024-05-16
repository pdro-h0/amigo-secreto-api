import { EventRepository } from "../repositories/event-repository";

export class EventsService{
    constructor(private eventService: EventRepository){}

    async execute(){
        const events = await this.eventService.getAll()

        return events
    }
}