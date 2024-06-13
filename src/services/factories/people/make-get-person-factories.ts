import { PrismaPeopleRepostiry } from "../../../repositories/prisma/prisma-people-repository";
import { GetPersonService } from "../../people/get-person";

export const makeGetPersonFactories = () => {
  const prismaPeopleRepostiry = new PrismaPeopleRepostiry();
  const getPersonService = new GetPersonService(prismaPeopleRepostiry);

  return getPersonService;
};
