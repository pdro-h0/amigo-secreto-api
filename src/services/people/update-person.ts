import { Prisma } from "@prisma/client";
import { PeopleRepository } from "../../repositories/people-repository";

export class UpdatePersonService {
  constructor(private peopleRepository: PeopleRepository) {}

  async execute(
    data: Prisma.EventPeopleUncheckedUpdateManyInput,
    eventId: number,
    groupId?: number,
    id?: number
  ) {
    const updatedPerson = await this.peopleRepository.updatePerson(
      data,
      eventId,
      groupId,
      id
    );

    if (!updatedPerson) return null;

    const personId = await this.peopleRepository.getPerson(eventId, groupId,id)

    return {
      personId
    }
  }
}
