import { describe, it, expect, beforeEach } from 'vitest';
import {defaultPerson, Person} from "@src/dirty/naming/Person"
import {PersonService} from "@src/dirty/tests/PersonService";

describe('PersonServiceTest', () => {
  let sut: PersonService;

  beforeEach(() => {
    sut = new PersonService();
  });

  it('shouldSignUpValidPerson', () => {
    // given
    const person: Person = {...defaultPerson, ...{
      coreFirstName: "CJ",
      coreLastName: "Ramone",
    }}

    // when
    const signedUpPerson = sut.signUp(person);

    // then
    expect(signedUpPerson.coreFirstName).toEqual(person.coreFirstName);
    expect(signedUpPerson.coreLastName).toEqual(person.coreLastName);
    expect(signedUpPerson.coreState).toEqual("new"); // or expected.coreState
    expect(signedUpPerson.id).toMatch(/[0-9]{1,1}/);
  });

  it('shouldThrowErrorWhenSigningUpInvalidPerson', () => {
    // given
    const person: Person = {...defaultPerson, ...{
      coreFirstName: "P",
      coreLastName: "Ramone",
    }}

    // when
    const action = () => sut.signUp(person);

    // then
    expect(action).toThrow(Error);
    expect(action).toThrow("First name must be at least 2 characters long");
  });

});