import { EventPeople } from "@prisma/client";

export interface PeopleRepository {
  getAll(eventId: number, groupId: number): Promise<EventPeople[] | null>;
}
