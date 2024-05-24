import { beforeEach, describe, expect, it } from "vitest";
import { GetOneEvent } from "./get-one-event";
import { InMemoryEventsRepository } from "../repositories/in-memory/in-memory-events-repository";

let getOneEventService: GetOneEvent;
let inMemoryEventRepository: InMemoryEventsRepository;

describe("GET ONE EVENT", () => {
  beforeEach(async () => {
    inMemoryEventRepository = new InMemoryEventsRepository();
    getOneEventService = new GetOneEvent(inMemoryEventRepository);
  });

  it("should be able to get one event", async () => {
    await inMemoryEventRepository.addEvent({
      description: "descrição do evento 1",
      title: "Evento 1",
      id: 9,
    });

    const { event } = await getOneEventService.execute(9);

    expect(event?.id).toEqual(9);
  });
});
