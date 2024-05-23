import { Event, Prisma } from "@prisma/client";

export interface EventRepository {
  getAll(): Promise<Event[] | null>;
  getById(id: number): Promise<Event | null>;
  addEvent(data: Prisma.EventUncheckedCreateInput): Promise<Event>
}
