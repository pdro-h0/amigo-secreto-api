import { EventRepository } from "../../repositories/event-repository";

export class DoesMatchesService {
  constructor(private eventRepository: EventRepository) {}

  async execute(id: number) {
    const doesMatches = await this.eventRepository.doesMatches(id);

    return true;
  }
}
