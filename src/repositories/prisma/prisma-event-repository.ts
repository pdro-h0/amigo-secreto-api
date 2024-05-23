import { Prisma } from "@prisma/client";
import { db } from "../../lib/prisma";
import { EventRepository } from "../event-repository";

export class PrismaEventRepository implements EventRepository {
  async addEvent(data: Prisma.EventUncheckedCreateInput) {
    const event = await db.event.create({
      data
    })

    return event
    
  }
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
