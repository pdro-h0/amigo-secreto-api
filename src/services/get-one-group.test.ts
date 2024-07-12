import { beforeEach, describe, expect, it } from "vitest";
import { GetOneGroupService } from "./get-one-group";
import { InMemoryGroupsRepository } from "../repositories/in-memory/in-memory-groups-repository";

let inMemoryGroupsRepository: InMemoryGroupsRepository;
let getOneGroupService: GetOneGroupService;

describe("GET ONE GROUP", () => {
  beforeEach(async () => {
    inMemoryGroupsRepository = new InMemoryGroupsRepository();
    getOneGroupService = new GetOneGroupService(inMemoryGroupsRepository);
  });

  it("Should be able to get one event group", async () =>{
    await inMemoryGroupsRepository.addGroup("grupo 1", 1, 1)
    await inMemoryGroupsRepository.addGroup("grupo 2", 1, 2)
    await inMemoryGroupsRepository.addGroup("grupo 3", 1, 3)

    const { group } = await getOneGroupService.execute(1, 2)

    expect(group?.name).toEqual("grupo 2");
  })
});
