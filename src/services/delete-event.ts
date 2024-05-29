import { EventRepository } from "../repositories/event-repository";

export class DeleteEventService {
  constructor(private eventRepository: EventRepository) {}

  async execute(id: number) {
    const event = await this.eventRepository.delete(id);

    if (!event) return;

    return {
      event,
    };
  }
}
