import { GroupRepository } from "../repositories/group-repository";

export class GetAllGroups {
  constructor(private groupRepository: GroupRepository) {}

  async execute(eventId: number) {
    const groups = await this.groupRepository.getAll(eventId);

    return {
      groups,
    };
  }
}
