const maxSequence = require("./maximum-subarray-sum")

describe("maximum-subarray-sum", () => {
  it("solves correctly", () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })

  it("solves correctly 2", () => {
    expect(maxSequence([1, 2, 3, 4, 5])).toBe(15)
  })

  it("solves correctly 3", () => {
    expect(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])).toBe(0)
  })

  it("solves correctly 4", () => {
    expect(maxSequence([])).toBe(0)
  })
})
