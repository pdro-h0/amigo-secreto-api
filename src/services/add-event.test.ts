import { beforeEach, describe, expect, it } from "vitest";
import { AddEventService } from "./add-event";
import { InMemoryEventsRepository } from "../repositories/in-memory/in-memory-events-repository";

let inMemoryEventRepository: InMemoryEventsRepository;
let addEventService: AddEventService;

describe("ADD EVENT", () => {
  beforeEach(async () => {
    inMemoryEventRepository = new InMemoryEventsRepository();
    addEventService = new AddEventService(inMemoryEventRepository);
  });

  it("should be bale to add event", async () => {
    const { event } = await addEventService.execute({
      description: "descrição do test 1",
      grouped: false,
      title: "teste 1",
    });

    expect(event.id).toEqual(expect.any(Number));
  });
});
