import { PrismaEventRepository } from "../../repositories/prisma/prisma-event-repository";
import { GetOneEvent } from "../get-one-event";

export const makeGetOneEventFactories = () => {
  const prismaEventRepository = new PrismaEventRepository();
  const getOneEvent = new GetOneEvent(prismaEventRepository);

  return getOneEvent;
};
