const josephus = require("./josephus-permutation")

describe("josephus-permutation", () => {
  it("solves correctly", () => {
    expect(josephus([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([3, 6, 2, 7, 5, 1, 4])
  })

  it("solves correctly 2", () => {
    expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual([
      2,
      4,
      6,
      8,
      10,
      3,
      7,
      1,
      9,
      5
    ])
  })

  it("solves correctly 3", () => {
    expect(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4)).toEqual([
      "e",
      "s",
      "W",
      "o",
      "C",
      "d",
      "r",
      "a"
    ])
  })

  it("returns an empty array", () => {
    expect(josephus([], 3)).toEqual([])
  })
})
