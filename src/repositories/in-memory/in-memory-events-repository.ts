import { EventRepository } from "../event-repository";
import { Event } from "@prisma/client";

export class InMemoryEventsRepository implements EventRepository {
  public events: Event[] = [];

  async getById(id: number) {
    const event = this.events.find((event) => event.id === id);

    if (!event) return null;

    return event;
  }

  async getAll() {
    return this.events;
  }
}
