import { PrismaPeopleRepostiry } from "../../../repositories/prisma/prisma-people-repository";
import { RemovePersonService } from "../../people/remove-person";

export const makeRemovePerosnFactories = () => {
  const prismaPeopleRepostiry = new PrismaPeopleRepostiry();
  const removePersonService = new RemovePersonService(prismaPeopleRepostiry);

  return removePersonService;
};
