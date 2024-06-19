import { Event, Prisma } from "@prisma/client";

export interface EventRepository {
  getAll(): Promise<Event[] | null>;
  getById(id: number): Promise<Event | null>;
  addEvent(data: Prisma.EventUncheckedCreateInput): Promise<Event>;
  updateEvent(
    id: number,
    data: Prisma.EventUncheckedUpdateInput
  ): Promise<Event>;
  delete(id: number): Promise<Event | Event[]>;
  doesMatches(id: number): Promise<boolean>
}
