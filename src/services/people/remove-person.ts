import { PeopleRepository } from "../../repositories/people-repository";

export class RemovePersonService {
  constructor(private peopleRepository: PeopleRepository) {}

  async execute(
    id: number,
    eventId?: number,
    groupId?: number
  ) {
    await this.peopleRepository.remove(id, eventId, groupId);
  }
}