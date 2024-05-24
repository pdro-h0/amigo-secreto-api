import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryEventsRepository } from "../repositories/in-memory/in-memory-events-repository";
import { EventsService } from "./events";

let inMemoryEventsRepository: InMemoryEventsRepository;
let eventsService: EventsService;

describe("EVENT SERVICE", () => {
  beforeEach(async () => {
    inMemoryEventsRepository = new InMemoryEventsRepository();
    eventsService = new EventsService(inMemoryEventsRepository);
  });

  it("should be bale to get events", async () => {
    await inMemoryEventsRepository.addEvent({
      id: 1,
      description: "descrição do evento 1",
      title: "Evento 1",
    });
    await inMemoryEventsRepository.addEvent({
      id: 2,
      description: "descrição do evento 2",
      title: "Evento 2",
    });

    const events = await eventsService.execute();

    expect(events).toHaveLength(2);
    expect(events).toEqual([
      expect.objectContaining({ title: "Evento 1" }),
      expect.objectContaining({ title: "Evento 2" }),
    ]);
  });
});
