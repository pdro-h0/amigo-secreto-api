import { PeopleRepository } from "../../repositories/people-repository";

export class GetPersonService {
  constructor(private peopleRepository: PeopleRepository) {}

  async execute(eventId: number, groupId?: number, id?: number, cpf?: string) {
    const person = await this.peopleRepository.getPerson(eventId, groupId, id, cpf);

    return {
      person,
    };
  }
}
