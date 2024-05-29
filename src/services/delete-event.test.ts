import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryEventsRepository } from "../repositories/in-memory/in-memory-events-repository";
import { DeleteEventService } from "./delete-event";

let inMemoryEventsRepository: InMemoryEventsRepository;
let deleteEventService: DeleteEventService;

describe("DELETE EVENT", () => {
  beforeEach(async () => {
    inMemoryEventsRepository = new InMemoryEventsRepository();
    deleteEventService = new DeleteEventService(inMemoryEventsRepository);
  });
  it("should be able to delete an event", async () => {
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
    await inMemoryEventsRepository.addEvent({
      id: 3,
      description: "descrição do evento 3",
      title: "Evento 3",
    });
    await inMemoryEventsRepository.addEvent({
      id: 4,
      description: "descrição do evento 4",
      title: "Evento 4",
    });

    const events = await deleteEventService.execute(2)

    expect(events?.event).toHaveLength(3)
    expect(events?.event).toEqual([
      expect.objectContaining({ title: "Evento 1" }),
      expect.objectContaining({ title: "Evento 3" }),
      expect.objectContaining({ title: "Evento 4" }),
    ]);
  });
});
