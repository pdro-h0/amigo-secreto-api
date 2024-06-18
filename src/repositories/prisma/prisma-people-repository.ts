import { Prisma } from "@prisma/client";
import { db } from "../../lib/prisma";
import { PeopleRepository } from "../people-repository";

export class PrismaPeopleRepostiry implements PeopleRepository {
  async remove(id: number, eventId?: number, groupId?: number) {
    await db.eventPeople.delete({
      where: {
        id,
        eventId,
        groupId,
      },
    });
  }
  async updatePerson(
    data: Prisma.EventPeopleUncheckedUpdateManyInput,
    eventId: number,
    groupId?: number | undefined,
    id?: number | undefined
  ) {
    const updatedPerson = await db.eventPeople.updateMany({
      where: {
        eventId,
        groupId,
        id,
      },
      data,
    });

    if (!updatedPerson) return null;

    return updatedPerson;
  }
  async addPerson(data: Prisma.EventPeopleUncheckedCreateInput) {
    const newPerson = await db.eventPeople.create({
      data,
    });

    return newPerson;
  }

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
