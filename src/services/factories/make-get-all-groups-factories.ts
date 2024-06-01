import { PrismaGroupRepostitory } from "../../repositories/prisma/prisma-group-repository";
import { GetAllGroups } from "../get-all-groups";

export const makeGetAllGroupsFactories = () => {
  const prismaGroupRepostitory = new PrismaGroupRepostitory();
  const getAllGroups = new GetAllGroups(prismaGroupRepostitory);

  return getAllGroups;
};
