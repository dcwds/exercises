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
        "21 * 77 - 54 / 1 * 1 - 41 / 22 / 84 / 45 / 34 / 77 / 3 - 62 + " +
          "62 / 93 + 42 / 44 + 91 * 11 + 47 / 45 * 92 + 14 - 66 / 36 * 10" +
          " + 17 - 79 - 78 * 18 * 18 + 44 + 55 + 30 - 96 + 64 / 51 - 14 /" +
          " 3 / 8 - 90 * 62 + 39 - 44 * 33 + 5 - 26 + 72 * 55 - 20 / 64 *" +
          " 84 - 65 * 89 - 66 * 60 / 21 * 45 / 44 - 86 - 2 - 51 / 78 - 31" +
          " / 74 - 33 - 77 - 91 * 19 + 32 + 71 / 62 * 48 - 3 - 16 + 13 * " +
          "41 * 48 / 36"
      )
    ).toEqual(-32912.497163086315)
  })
})
