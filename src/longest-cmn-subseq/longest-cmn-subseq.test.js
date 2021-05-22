const LCS = require("./longest-cmn-subseq")

describe("longest-cmn-subseq", () => {
  it("solves correctly", () => {
    expect(LCS("a", "b")).toBe("")
  })

  it("solves correctly 2", () => {
    expect(LCS("abc", "ac")).toBe("ac")
  })

  it("solves correctly 3", () => {
    expect(LCS("anothertest", "notatest")).toBe("nottest")
  })

  it("solves correctly 4", () => {
    expect(LCS("132535365", "123456789")).toBe("12356")
  })

  it("solves correctly 5", () => {
    expect(LCS("finaltest", "zzzfinallyzzz")).toBe("final")
  })
})
