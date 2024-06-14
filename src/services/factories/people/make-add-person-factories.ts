import { PrismaPeopleRepostiry } from "../../../repositories/prisma/prisma-people-repository";
import { AddPersonService } from "../../people/add-person";

export const makeAddPersonFactories = () => {
  const prismaPeopleRepostiry = new PrismaPeopleRepostiry();
  const addPersonService = new AddPersonService(prismaPeopleRepostiry);

  return addPersonService;
};
