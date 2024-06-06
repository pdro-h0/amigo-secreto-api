import { EventGroup, Prisma } from "@prisma/client";

export interface GroupRepository {
  getAll(eventId: number): Promise<EventGroup[] | []>;
  getOne(eventId: number, id: number): Promise<EventGroup | null>;
  addGroup(data:Prisma.EventGroupUncheckedCreateInput)
: Promise <EventGroup>}
