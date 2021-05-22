const number2words = require("./write-out-numbers")

describe("write-out-numbers", () => {
  it("solves correctly", () => {
    expect(number2words(0)).toBe("zero")
  })

  it("solves correctly 2", () => {
    expect(number2words(5)).toBe("five")
  })

  it("solves correctly 3", () => {
    expect(number2words(10)).toBe("ten")
  })

  it("solves correctly 4", () => {
    expect(number2words(15)).toBe("fifteen")
  })

  it("solves correctly 5", () => {
    expect(number2words(20)).toBe("twenty")
  })

  it("solves correctly 6", () => {
    expect(number2words(25)).toBe("twenty-five")
  })

  it("solves correctly 7", () => {
    expect(number2words(100)).toBe("one hundred")
  })

  it("solves correctly 8", () => {
    expect(number2words(101)).toBe("one hundred one")
  })

  it("solves correctly 9", () => {
    expect(number2words(888)).toBe("eight hundred eighty-eight")
  })

  it("solves correctly 10", () => {
    expect(number2words(1000)).toBe("one thousand")
  })

  it("solves correctly 11", () => {
    expect(number2words(19777)).toBe(
      "nineteen thousand seven hundred seventy-seven"
    )
  })

  it("solves correctly 12", () => {
    expect(number2words(999999)).toBe(
      "nine hundred ninety-nine thousand nine hundred ninety-nine"
    )
  })

  it("solves correctly 13", () => {
    expect(number2words(1003)).toBe("one thousand three")
  })
})
