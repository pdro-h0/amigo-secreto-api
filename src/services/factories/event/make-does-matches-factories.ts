import { PrismaEventRepository } from "../../../repositories/prisma/prisma-event-repository";
import { DoesMatchesService } from "../../events/does-matches";

export const makeDoesMatchesFactories = () => {
  const prismaEventRepository = new PrismaEventRepository();
  const doesMatchesService = new DoesMatchesService(prismaEventRepository);

  return doesMatchesService;
};
