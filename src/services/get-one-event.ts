import { EventRepository } from "../repositories/event-repository";

export class GetOneEvent {
  constructor(public eventRepository: EventRepository) {}

  async execute(id: number) {
    const event = await this.eventRepository.getById(id);

    return {
      event,
    };
  }
}
