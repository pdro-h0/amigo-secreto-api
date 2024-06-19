import { Prisma } from "@prisma/client";
import { db } from "../../lib/prisma";
import { EventRepository } from "../event-repository";

export class PrismaEventRepository implements EventRepository {
  doesMatches(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number) {
    const event = db.event.delete({
      where: {
        id,
      },
    });

    return event;
  }
  async updateEvent(id: number, data: Prisma.EventUncheckedUpdateInput) {
    const event = await db.event.update({
      where: {
        id,
      },
      data,
    });

    return event;
  }
  async addEvent(data: Prisma.EventUncheckedCreateInput) {
    const event = await db.event.create({
      data,
    });

    return event;
  }
  async getById(id: number) {
    const event = await db.event.findUnique({
      where: {
        id,
      },
    });

    if (!event) return null;

    return event;
  }
  async getAll() {
    const events = await db.event.findMany();

    return events;
  }
}
