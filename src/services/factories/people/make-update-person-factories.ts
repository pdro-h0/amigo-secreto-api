import { PrismaPeopleRepostiry } from "../../../repositories/prisma/prisma-people-repository";
import { UpdatePersonService } from "../../people/update-person";

export const makeUpdatePersonFactories = () => {
  const prismaPeopleRepostiry = new PrismaPeopleRepostiry();
  const updatePersonService = new UpdatePersonService(prismaPeopleRepostiry);

  return updatePersonService;
};
