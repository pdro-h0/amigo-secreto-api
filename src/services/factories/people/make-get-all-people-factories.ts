import { PrismaPeopleRepostiry } from "../../../repositories/prisma/prisma-people-repository";
import { GetAllPeopleService } from "../../people/get-all-people";

export const makeGetAllPeopleFactories = () => {
  const prismaPeopleRepostiry = new PrismaPeopleRepostiry();
  const getAllPeopleService = new GetAllPeopleService(prismaPeopleRepostiry);

  return getAllPeopleService;
};
