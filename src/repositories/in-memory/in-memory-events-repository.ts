import { EventRepository } from "../event-repository";
import { Event } from "@prisma/client";

export class InMemoryEventsRepository implements EventRepository {
  public events: Event[] = [];

  async getAll() {
    return this.events;
  }
}
