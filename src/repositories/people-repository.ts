import { EventPeople } from "@prisma/client";

export interface PeopleRepository {
  getAll(eventId: number, groupId: number): Promise<EventPeople[] | null>;
  getPerson(
    eventId: number,
    groupId?: number,
    id?: number,
    cpf?: string
  ): Promise<EventPeople | null>;
}
