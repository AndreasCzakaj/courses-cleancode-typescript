import { describe, it, expect } from 'vitest';
import {Person} from "@src/dirty/naming/Person"

describe('PersonTest', () => {

  it('person', () => {
    const person: Person = {
      id: "",
      coreFirstName: "Kim",
      coreLastName: "Gordon",
      coreState: "active",
      addrStreetAndNo: "Penny Lane",
      addrZipAndCity: "Beverly Bills, 90210",
      addrState: "California",
    }

    expect(person.coreFirstName).toEqual("Kim");
    expect(person.coreLastName).toEqual("Gordon");
    expect(person.coreState).toEqual("active");
    expect(person.addrStreetAndNo).toEqual("Penny Lane");
    expect(person.addrZipAndCity).toEqual("Beverly Bills, 90210");
    expect(person.addrState).toEqual("California");
  });

});