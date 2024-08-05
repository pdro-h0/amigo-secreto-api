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
    for (let i = 0; i < 4; i++) {
      await inMemoryEventsRepository.addEvent({
        id: i + 1,
        description: `descrição do evento ${i + 1}`,
        title: `Evento ${i + 1}`,
      });
    }

    const events = await deleteEventService.execute(2)

    expect(events?.event).toHaveLength(3)
    expect(events?.event).toEqual([
      expect.objectContaining({ title: "Evento 1" }),
      expect.objectContaining({ title: "Evento 3" }),
      expect.objectContaining({ title: "Evento 4" }),
    ]);
  });
});
