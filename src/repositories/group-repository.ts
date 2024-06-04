import { EventGroup } from "@prisma/client";

export interface GroupRepository {
  getAll(eventId: number): Promise<EventGroup[] | []>;
  getOne(eventId: number, id: number): Promise<EventGroup | null>;
}
