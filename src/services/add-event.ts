import { EventRepository } from "../repositories/event-repository";

interface AddEventServiceBody {
  title: string;
  description: string;
  grouped: boolean;
}

export class AddEventService {
  constructor(private eventRepository: EventRepository) {}

  async execute(data: AddEventServiceBody) {
    const event = await this.eventRepository.addEvent({
      description: data.description,
      title: data.title,
      grouped: data.grouped,
    });

    return {
      event,
    };
  }
}
