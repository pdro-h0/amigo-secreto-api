import { PrismaEventRepository } from "../../repositories/prisma/prisma-event-repository";
import { UpdateEventService } from "../updateEvent";

export const makeUpdateEvent = () => {
  const prismaEventRepository = new PrismaEventRepository();
  const updateEventService = new UpdateEventService(prismaEventRepository);

  return updateEventService;
};
