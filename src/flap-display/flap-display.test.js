const flapFns = require("./flap-display")

const { flapDisplay, flap } = flapFns

describe("flap-display", () => {
  it("solves correctly", () => {
    expect(flapDisplay(["CAT"], [[1, 13, 27]])).toEqual(["DOG"])
  })

  it("solves correctly 2", () => {
    expect(flapDisplay(["HELLO "], [[15, 49, 50, 48, 43, 13]])).toEqual([
      "WORLD!"
    ])
  })

  it("solves correctly 3", () => {
    expect(
      flapDisplay(
        ["THE QUICK BROWN FOX JUMPS OVER A LAZY DOG"],
        [
          [
            13,
            51,
            20,
            43,
            26,
            5,
            21,
            24,
            41,
            19,
            8,
            8,
            46,
            14,
            6,
            37,
            26,
            36,
            52,
            50,
            30,
            31,
            40,
            36,
            43,
            47,
            15,
            3,
            18,
            43,
            34,
            41,
            42,
            12,
            4,
            5,
            34,
            4,
            32,
            42,
            28
          ]
        ]
      )
    ).toEqual(["(R|1HQZ/:TC P.|#< )(1)L6*/2CDF4JXUN/W!.>C"])
  })

  it("rotates correctly", () => {
    expect(flap("CAT", 1)).toBe("DBU")
  })
})
