import { EventRepository } from "../../repositories/event-repository";
import { GroupRepository } from "../../repositories/group-repository";
import { PeopleRepository } from "../../repositories/people-repository";
import { encryptMatch } from "../../utils/match";

interface ISortedList {
  id: number;
  match: number;
}

export class DoesMatchesService {
  constructor(
    private eventRepository: EventRepository,
    private peopleRepository: PeopleRepository,
    private groupRepository: GroupRepository
  ) {}

  async execute(id: number) {
    const eventItem = await this.eventRepository.getById(id);

    if (eventItem) {
      const peopleList = await this.peopleRepository.getAll(id);

      if (peopleList) {
        let sortedList: ISortedList[] = [];
        let sortable: number[] = [];

        let attemps = 0;
        const maxAttemps = peopleList.length;
        let keepTrying = true;

        while (keepTrying && attemps < maxAttemps) {
          keepTrying = false;
          attemps++;
          sortedList = [];
          sortable = peopleList.map((person) => person.id);

          for (let i in peopleList) {
            let sortableFiltered: number[] = sortable;
            if (eventItem.grouped) {
              sortableFiltered = sortable.filter((sortableItem) => {
                let sortablePerson = peopleList.find(
                  (person) => person.id === sortableItem
                );

                return peopleList[i].groupId !== sortablePerson?.groupId;
              });
            }

            if (
              sortableFiltered.length === 0 ||
              (sortableFiltered.length === 1 &&
                peopleList[i].id === sortableFiltered[0])
            ) {
              keepTrying = true;
            } else {
              let sortedIndex = Math.floor(
                Math.random() * sortableFiltered.length
              );

              while (sortableFiltered[sortedIndex] === peopleList[i].id) {
                sortedIndex = Math.floor(
                  Math.random() * sortableFiltered.length
                );
              }

              sortedList.push({
                id: peopleList[i].id,
                match: sortableFiltered[sortedIndex],
              });

              sortable = sortable.filter(
                (item) => item !== sortableFiltered[sortedIndex]
              );
            }
          }
        }

        if (attemps < maxAttemps) {
          for (let i in sortedList) {
            await this.peopleRepository.updatePerson(
              {
                matched: encryptMatch(sortedList[i].match),
              },
              id,
              undefined,
              sortedList[i].id
            );
          }
          return true
        }
      }
    }
    return false;
  }
}
