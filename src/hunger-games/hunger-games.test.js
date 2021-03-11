const whoEatsWho = require("./hunger-games")

describe("hunger-games", () => {
  it("solves correctly", () => {
    expect(whoEatsWho("fox,bug,chicken,grass,sheep")).toEqual([
      "fox,bug,chicken,grass,sheep",
      "chicken eats bug",
      "fox eats chicken",
      "sheep eats grass",
      "fox eats sheep",
      "fox"
    ])
  })
})
