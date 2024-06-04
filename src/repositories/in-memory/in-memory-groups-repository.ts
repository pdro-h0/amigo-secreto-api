import { EventGroup } from "@prisma/client";
import { GroupRepository } from "../group-repository";

export class InMemoryGroupsRepository implements GroupRepository {
  public groups: EventGroup[] = [];

  async getAll(eventId: number) {
    const groups = await this.groups.filter((group) => group.id === eventId);

    return groups;
  }
  async getOne(eventId: number, id: number) {
    const group = await this.groups.find(
      (group) => group.id === id && group.eventId === eventId
    );

    if (!group) return null;

    return group;
  }
}
