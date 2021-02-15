const dirReduc = require("./directions-reduction")

describe("directions reduction", () => {
  it("eliminates direct opposites and returns the rest", () => {
    expect(
      dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
    ).toEqual(["WEST"])
  })

  it("returns all directions if no direct opposites are found", () => {
    expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual([
      "NORTH",
      "WEST",
      "SOUTH",
      "EAST"
    ])
  })

  it("returns an empty array if all directions are direct opposites", () => {
    expect(
      dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])
    ).toEqual([])
  })
})
