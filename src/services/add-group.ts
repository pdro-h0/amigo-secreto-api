import { Prisma } from "@prisma/client";
import { GroupRepository } from "../repositories/group-repository";

export class AddGroupService {
    constructor(private groupRepository: GroupRepository){}

    async execute(name: string, eventId: number){
        const newGroup = await this.groupRepository.addGroup(name, eventId)

        return newGroup
    }
}