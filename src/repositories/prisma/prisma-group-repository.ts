import { Prisma } from "@prisma/client";
import { db } from "../../lib/prisma";
import { GroupRepository } from "../group-repository";

export class PrismaGroupRepostitory implements GroupRepository {
  async delete(eventId: number, id: number) {
    await db.eventGroup.delete({
      where: {
        id,
        eventId,
      },
    });
  }
  
  async updateGroup(
    eventId: number,
    id: number,
    data: Prisma.EventGroupUpdateInput
  ) {
    const updatedGroup = await db.eventGroup.update({
      where: {
        id,
        eventId,
      },
      data,
    });

    return updatedGroup;
  }

  async addGroup(name: string, eventId:number) {
    const newGroup = await db.eventGroup.create({
      data: {
        name,
        eventId
      },
    });

    return newGroup;
  }
  async getOne(eventId: number, id: number) {
    const group = await db.eventGroup.findFirst({
      where: {
        eventId: eventId,
        id: id,
      },
    });

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
