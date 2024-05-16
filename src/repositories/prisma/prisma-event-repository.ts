import { db } from "../../lib/prisma";
import { EventRepository } from "../event-repository";

export class PrismaEventRepository implements EventRepository {
  async getAll() {
    const events = await db.event.findMany();

    return events;
  }
}
