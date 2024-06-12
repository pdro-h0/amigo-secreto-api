import { db } from "../../lib/prisma";
import { PeopleRepository } from "../people-repository";

export class PrismaPeopleRepostiry implements PeopleRepository {
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
