import { describe, it, expect } from 'vitest';
import {UuidGeneratorNaiveRandomImpl} from "@src/clean/UuidGeneratorNaiveRandomImpl";

describe('UuidGeneratorTest', () => {

  it.each([
    [new UuidGeneratorNaiveRandomImpl(), "[a-f0-9]{32}", "lower case, no dashes"],
    //[new ???, "[A-F0-9]{32}", "upper case, no dashes"],
    //[new ???, "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}", "lower case, with dashes"],
    //[new ???, "[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}", "upper case, with dashes"]
  ])('should match pattern %s for case: %s', (uuidGenerator: UuidGenerator, expectedRegex: string, info: string) => {
    // when
    const actual = uuidGenerator.create();

    // then
    expect(actual).toMatch(new RegExp(expectedRegex));
  });

});