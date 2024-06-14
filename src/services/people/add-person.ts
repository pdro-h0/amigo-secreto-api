import { Prisma } from "@prisma/client";
import { PeopleRepository } from "../../repositories/people-repository";

export class AddPersonService {
  constructor(private peopleRepository: PeopleRepository) {}

  async execute(data: Prisma.EventPeopleUncheckedCreateInput) {
    const newPerson = await this.peopleRepository.addPerson(data);

    return {
      newPerson,
    };
  }
}
