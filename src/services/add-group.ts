import { Prisma } from "@prisma/client";
import { GroupRepository } from "../repositories/group-repository";

export class AddGroupService {
    constructor(private groupRepository: GroupRepository){}

    async execute(data: Prisma.EventGroupUncheckedCreateInput){
        const newGroup = await this.groupRepository.addGroup(data)

        return newGroup
    }
}