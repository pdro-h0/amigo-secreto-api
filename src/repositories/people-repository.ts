import { EventPeople, Prisma } from "@prisma/client";

export interface PeopleRepository {
  getAll(eventId: number, groupId: number): Promise<EventPeople[] | null>;
  getPerson(
    eventId: number,
    groupId?: number,
    id?: number,
    cpf?: string
  ): Promise<EventPeople | null>;
  addPerson(data: Prisma.EventPeopleUncheckedCreateInput): Promise<EventPeople>;
  updatePerson(
    data: Prisma.EventPeopleUncheckedUpdateManyInput,
    eventId: number,
    groupId?: number,
    id?: number
  ): Promise<Prisma.BatchPayload | null>;
}
