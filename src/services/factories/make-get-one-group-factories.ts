import { PrismaGroupRepostitory } from "../../repositories/prisma/prisma-group-repository";
import { GetOneGroupService } from "../get-one-group";

export const makeGetOneGroupFactories = () => {
  const prismaGroupRepostitory = new PrismaGroupRepostitory();
  const getOneGroupService = new GetOneGroupService(prismaGroupRepostitory);

  return getOneGroupService;
};
