import { Event } from "@prisma/client";

export interface EventRepository {
  getAll(): Promise<Event[] | null>;
}
