import { db } from "../../lib/prisma";
import { PeopleRepository } from "../people-repository";

export class PrismaPeopleRepostiry implements PeopleRepository {
  async getPerson(
    eventId: number,
    groupId?: number | undefined,
    id?: number | undefined,
    cpf?: string | undefined
  ) {
    if (!id && !cpf) return null;
    
    const person = await db.eventPeople.findUnique({
      where: {
        id,
        cpf,
        eventId,
        groupId,
      },
    });

    if (!person) return null;

    return person;
  }
  async getAll(eventId: number, groupId: number) {
    const people = await db.eventPeople.findMany({
      where: {
        eventId,
        groupId,
      },
    });

    if (!people) return null;

    return people;
  }
}
