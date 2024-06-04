import { db } from "../../lib/prisma";
import { GroupRepository } from "../group-repository";

export class PrismaGroupRepostitory implements GroupRepository {
  async getOne(eventId: number, id: number) {
    const group = await db.eventGroup.findFirst({
      where: {
        eventId: eventId,
        id : id
      },
    });

    console.log(group)

    return group;
  }
  async getAll(eventId: number) {
    const groups = await db.eventGroup.findMany({
      where: {
        eventId,
      },
    });

    return groups;
  }
}
