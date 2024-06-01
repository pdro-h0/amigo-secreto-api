import { EventGroup } from "@prisma/client";

export interface GroupRepository {
  getAll(eventId: number): Promise<EventGroup[] | []>;
}
