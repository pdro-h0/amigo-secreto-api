import { Prisma } from "@prisma/client";
import { GroupRepository } from "../repositories/group-repository";

export class UpdateGroupService {
  constructor(private groupRepository: GroupRepository) {}

  async execute(
    eventId: number,
    id: number,
    data: Prisma.EventGroupUpdateInput
  ) {
    const updatedGroup = await this.groupRepository.updateGroup(
      eventId,
      id,
      data
    );

    return updatedGroup;
  }
}
