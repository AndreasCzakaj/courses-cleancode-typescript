import { describe, it, expect } from 'vitest'
import {PersonBuilder} from "@src/dirty/functions/Person"

describe('PersonBuilder', () => {

  test('just a demo', () => {
    const actual1 = new PersonBuilder().name("a").age(42).email("a@b.com").build()
    const expected1: typeof actual1 = {
      name: "a",
      age: 42,
      email: "a@b.com",
    }
    expect(actual1).toEqual(expected1)

    //actual1.name = "x" // does not compile


    const actual2 = new PersonBuilder().name("b").batch(actual1).build()
    const expected2: typeof actual2 = {
      name: "a",
      age: 42,
      email: "a@b.com",
    }
    expect(actual2).toEqual(expected2)
  })

})