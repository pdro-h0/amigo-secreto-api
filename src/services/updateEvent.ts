import { Prisma } from "@prisma/client";
import { EventRepository } from "../repositories/event-repository";
import { PeopleRepository } from "../repositories/people-repository";

export class UpdateEventService {
  constructor(
    private eventRepository: EventRepository,
    private peopleRepository: PeopleRepository
  ) {}

  async execute(id: number, data: Prisma.EventUncheckedUpdateInput) {
    const event = await this.eventRepository.updateEvent(id, data);

    if (event) {
      if (event.status) {
        const result = await this.eventRepository.doesMatches(id);
        if (!result) {
          throw new Error("Grupos impossíveis de sortear");
        }
      } else {
        await this.peopleRepository.updatePerson({ matched: "" }, id);
      }
    }

    return {
      event,
    };
  }
}
