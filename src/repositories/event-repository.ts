import { Event } from "@prisma/client";

export interface EventRepository {
  getAll(): Promise<Event[] | null>;
  getById(id: number): Promise<Event | null>;
}
