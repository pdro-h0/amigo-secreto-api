import { PeopleRepository } from "../../repositories/people-repository";

export class GetAllPeopleService {
  constructor(private peopleRepository: PeopleRepository) {}

  async execute(eventId: number, groupId: number) {
    const people = await this.peopleRepository.getAll(eventId, groupId);

    if (!people) return null;

    return {
      people,
    };
  }
}
