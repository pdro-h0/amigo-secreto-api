import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryGroupsRepository } from "../repositories/in-memory/in-memory-groups-repository";
import { AddGroupService } from "./add-group";

let inMemoryGroupsRepository: InMemoryGroupsRepository;
let addGroupService: AddGroupService;

describe("ADD GROUP", () => {
  beforeEach(async () => {
    inMemoryGroupsRepository = new InMemoryGroupsRepository();
    addGroupService = new AddGroupService(inMemoryGroupsRepository);
  });

  it("Should be able to create a group", async () => {
    const craetedGroup = await addGroupService.execute({
      name: "group 1",
      eventId: 1,
    });

    expect(craetedGroup.id).toEqual(expect.any(Number));
  });
});
