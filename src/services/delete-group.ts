import { GroupRepository } from "../repositories/group-repository";

export class DeleteGroupService {
  constructor(private groupRepository: GroupRepository) {}

  async execute(eventId: number, id: number) {
    await this.groupRepository.delete(eventId, id);
  }
}
