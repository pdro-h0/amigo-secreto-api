import { PrismaGroupRepostitory } from "../../repositories/prisma/prisma-group-repository";
import { DeleteGroupService } from "../delete-group";

export const makeDeleteGroupFactories = () => {
  const prismaGroupRepostitory = new PrismaGroupRepostitory();
  const deleteGroupService = new DeleteGroupService(prismaGroupRepostitory);

  return deleteGroupService;
};
