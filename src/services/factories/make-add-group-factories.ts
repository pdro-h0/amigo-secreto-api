import { PrismaGroupRepostitory } from "../../repositories/prisma/prisma-group-repository";
import { AddGroupService } from "../add-group";

export const makeAddGroupFactories = () => {
  const prismaGroupRepository = new PrismaGroupRepostitory();
  const addGroupService = new AddGroupService(prismaGroupRepository);

  return addGroupService;
};
