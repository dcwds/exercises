const calc = require("./calculator")

describe("calculator", () => {
  it("solves correctly", () => {
    expect(calc("2 / 2 + 3 * 4 - 6")).toBe(7)
  })

  it("solves correctly 2", () => {
    expect(calc("2 + 3 * 4 / 3 - 6 / 3 * 3 + 8")).toBe(8)
  })

  it("solves correctly 3", () => {
    expect(calc("2 - 3 - 4")).toEqual(-5)
  })

  it("solves correctly 4", () => {
    expect(calc("58 / 83 - 77")).toEqual(-76.3012048192771)
  })

  it("solves correctly 5", () => {
    expect(calc("24 - 91 * 33 - 61 / 72 / 5")).toEqual(-2979.1694444444443)
  })

  it("solves correctly 6", () => {
    expect(calc("66 - 74 / 7 * 97")).toEqual(-959.4285714285713)
  })

  it("solves correctly 7", () => {
    expect(calc("66 - 18 / 44 - 79 + 86 * 19 * 8 + 21")).toEqual(
      13079.59090909091
    )
  })

  it("solves correctly 8", () => {
    expect(
      calc(
        "9 / 57 - 60 + 17 - 61 / 49 / 30 / 87 / 26 / 80 + 69 * 36 - 78 * 91 * 33"
      )
    ).toEqual(-231792.84210549248)
  })
})
