import { PrismaEventRepository } from "../../repositories/prisma/prisma-event-repository";
import { AddEventService } from "../add-event";

export const makeAddEventFactories = () => {
  const prismaEventRepository = new PrismaEventRepository();
  const addEventService = new AddEventService(prismaEventRepository);

  return addEventService;
};
