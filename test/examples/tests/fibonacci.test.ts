import { Fibonacci } from "@src/examples/tests/fibonacci"

export const fibonacciTest = (name: string, fibonacci: Fibonacci) =>
  describe(`fibonacci test using implementation ${name}"`, () => {

    it("should yield 0 for index 0", () => {
        // given
        const index = 0

        // when
        const actual = fibonacci.calculate(index)

        // then
        expect(actual).toBe(0)
    })

    it.todo("should throw an Error for null index")
    it.todo("should throw an Error for undefined index")
    it.todo("should throw an Error for index < 0")
    it.todo("should throw an Error for index > 46")

    it.todo("should yield 1 for index 1")
    it.todo("should yield 1 for index 2")
    it.todo("should yield 2 for index 3")
    it.todo("should yield 5 for index 5")
    it.todo("should yield 13 for index 7")
    it.todo("should yield 4_181 for index 19")
    it.todo("should yield 832_040 for index 30")

    /*test.each`
      input        | expected
      ${undefined} | ${"index must not be undefined"}
      ${-1}        | ${"index must not be negative"}
    `(
      "should throw error with message $expected for input $input",
      ({ input, expected }) => {
        const action = () => fibonacci.calculate(input)
        expect(action).toThrow(new Error(expected))
      }
    )*/

    /*test.each`
      index | expected   | reason
      ${0}  | ${0}       | ${" 0 => 0"}
      ${1}  | ${1}       | ${" 1 => 1"}
      ${2}  | ${1}       | ${" 2 => 1"}
      ${3}  | ${2}       | ${" 3 => 2"}
      ${5}  | ${5}       | ${" 5 => 5"}
      ${6}  | ${8}       | ${" 6 => 8"}
      ${7}  | ${13}      | ${" 7 => 13"}
      ${19} | ${4_181}   | ${" 19 => 4_181"}
      ${30} | ${832_040} | ${" 30 => 832_040"}
    `("should yield $expected for index $index", ({ index, expected }) => {
      const actual = fibonacci.calculate(index)
      expect(actual).toBe(expected)
    })*/

    /*it.skip("should show which impl is slow af", () => {
      expect(fibonacci.calc(46)).toBe(1_836_311_903)
    })*/
  })

describe("Fibonacci 1st implementation", () => {
  fibonacciTest("1st impl", new Fibonacci())
})
