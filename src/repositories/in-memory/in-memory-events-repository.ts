import { EventRepository } from "../event-repository";
import { Event, Prisma } from "@prisma/client";

export class InMemoryEventsRepository implements EventRepository {
  public events: Event[] = [];

  async delete(id: number) {
    const events = await this.events.filter((event) => event.id !== id);

    return events;
  }
  async updateEvent(id: number, data: Prisma.EventUncheckedUpdateInput) {
    const event = await this.events.find((event) => event.id === id);

    if (!event) throw new Error();

    Object.assign(event, { data });

    return event;
  }

  async addEvent(data: Prisma.EventUncheckedCreateInput) {
    const event = {
      title: data.title,
      description: data.description,
      grouped: data.grouped ?? false,
      status: data.status ?? false,
      id: data.id ?? Math.floor(Math.random() * 220),
    };

    this.events.push(event);

    return event;
  }

  async getById(id: number) {
    const event = this.events.find((event) => event.id === id);

    if (!event) return null;

    return event;
  }

  async getAll() {
    return this.events;
  }
}
