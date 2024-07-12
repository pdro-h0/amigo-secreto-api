import { EventGroup, Prisma } from "@prisma/client";
import { GroupRepository } from "../group-repository";

export class InMemoryGroupsRepository implements GroupRepository {
  public groups: EventGroup[] = [];

  async delete(eventId: number, id: number) {
    this.groups.filter(
      (group) => group.id === group.id && group.eventId === eventId
    );
  }

  async addGroup(name: string, eventId: number, id?: number) {
    const createdGroup = {
      id: id ?? Math.floor(Math.random() * 10),
      name: name,
      eventId: eventId ?? Math.floor(Math.random() * 10),
    };

    this.groups.push(createdGroup);

    return createdGroup;
  }
  async updateGroup(
    eventId: number,
    id: number,
    data: Prisma.EventGroupUpdateInput
  ) {
    const group = await this.groups.find((group) => group.id === id);

    if (!group) return null;

    Object.assign(group, data.name);

    return group;
  }

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
