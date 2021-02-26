const assemblerFns = require("./assembler-interpreter")

const { assembler, parse, inc, dec, mov, jnz } = assemblerFns

describe("assembler-interpreter", () => {
  it("returns correct registers and values", () => {
    expect(
      assembler(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"])
    ).toEqual({ a: 1 })
  })

  it("returns correct registers and values 2", () => {
    expect(
      assembler(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"])
    ).toEqual({ a: 0, b: -20 })
  })

  it("parses cmd", () => {
    expect(parse("mov a 5")).toEqual({ name: "mov", args: ["a", "5"] })
  })

  it("parses cmd 2", () => {
    expect(parse("inc a")).toEqual({ name: "inc", args: ["a"] })
  })

  it("increments and returns correct registers", () => {
    expect(inc("a", { a: 0, b: 0 })).toEqual({ a: 1, b: 0 })
  })

  it("decrements and returns correct registers", () => {
    expect(dec("a", { a: 0, b: 0 })).toEqual({ a: -1, b: 0 })
  })

  it("copies register contents to other register", () => {
    expect(mov("a", "b", { a: 0, b: 5 })).toEqual({ a: 5, b: 5 })
  })

  it("copies integer to register", () => {
    expect(mov("a", 5, { a: 0 })).toEqual({ a: 5 })
  })

  it("returns true when register does not equal zero", () => {
    expect(jnz("a", -1, { a: 5 })).toBe(true)
  })

  it("returns false when register equals zero", () => {
    expect(jnz("a", -1, { a: 0 })).toBe(false)
  })
})
