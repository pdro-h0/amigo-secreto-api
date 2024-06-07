import { PrismaGroupRepostitory } from "../../repositories/prisma/prisma-group-repository";
import { UpdateGroupService } from "../update-group";

export const makeUpdateGroupFactories = () => {
  const prismaGroupRepostitory = new PrismaGroupRepostitory();
  const updateGroupService = new UpdateGroupService(prismaGroupRepostitory);

  return updateGroupService;
};
