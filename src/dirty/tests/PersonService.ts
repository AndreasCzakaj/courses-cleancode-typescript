import {Person} from "@src/dirty/naming/Person";

export class PersonService {
  signUp(person: Person): Person {
    if ((person?.coreFirstName?.length ?? 0) < 2) {
      throw new Error("First name must be at least 2 characters long");
    }
    person.coreState = "new";
    person.id = "1";
    return person;
  }
}