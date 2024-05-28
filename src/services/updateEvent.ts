import { Prisma } from "@prisma/client";
import { EventRepository } from "../repositories/event-repository";

export class UpdateEventService {
  constructor(private eventRepository: EventRepository) {}

  async execute(id: number, data: Prisma.EventUncheckedUpdateInput) {
    const event = await this.eventRepository.updateEvent(id, data);

    return {
        event
    }
  }
}