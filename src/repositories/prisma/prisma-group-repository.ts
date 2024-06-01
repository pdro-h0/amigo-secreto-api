import { db } from "../../lib/prisma";
import { GroupRepository } from "../group-repository";

export class PrismaGroupRepostitory implements GroupRepository {
  async getAll(eventId: number) {
    const groups = await db.eventGroup.findMany({
      where: {
        eventId,
      },
    });

    return groups;
  }
}
