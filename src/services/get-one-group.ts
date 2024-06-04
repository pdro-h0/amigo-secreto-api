import { GroupRepository } from "../repositories/group-repository";

export class GetOneGroupService {
  constructor(private groupRepository: GroupRepository) {}

  async execute(eventId: number, id: number) {
    const group = await this.groupRepository.getOne(eventId, id);

    return {
      group,
    };
  }
}
