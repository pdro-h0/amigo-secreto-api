import { db } from "../../lib/prisma";
import { EventRepository } from "../event-repository";

export class PrismaEventRepository implements EventRepository {
  async getById(id: number) {
    const event = await db.event.findUnique({
      where:{
        id
      }
    })

    if(!event) return null

    return event
    
  }
  async getAll() {
    const events = await db.event.findMany();

    return events;
  }
}
