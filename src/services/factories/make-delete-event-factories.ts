import { PrismaEventRepository } from "../../repositories/prisma/prisma-event-repository";
import { DeleteEventService } from "../delete-event";

export const makeDeleteEvent = () => {
  const prismaEventRepository = new PrismaEventRepository();
  const deleteEventService = new DeleteEventService(prismaEventRepository);

  return deleteEventService;
};
