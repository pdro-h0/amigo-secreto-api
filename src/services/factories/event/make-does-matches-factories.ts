import { PrismaEventRepository } from "../../../repositories/prisma/prisma-event-repository";
import { DoesMatchesService } from "../../events/does-matches";
import { PrismaPeopleRepostiry } from "../../../repositories/prisma/prisma-people-repository";
import { PrismaGroupRepostitory } from "../../../repositories/prisma/prisma-group-repository";

export const makeDoesMatchesFactories = () => {
  const prismaEventRepository = new PrismaEventRepository();
  const prismaPeopleRepostiry = new PrismaPeopleRepostiry();
  const prismaGroupRepostitory = new PrismaGroupRepostitory();

  const doesMatchesService = new DoesMatchesService(
    prismaEventRepository,
    prismaPeopleRepostiry,
    prismaGroupRepostitory
  );

  return doesMatchesService;
};
