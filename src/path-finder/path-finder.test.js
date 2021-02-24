const pathFinder = require("./path-finder")

describe("path-finder", () => {
  it("reaches exit", () => {
    expect(
      pathFinder(`
        .W.
        .W.
        ...
    `)
    ).toBe(true)
  })

  it("reaches exit 2", () => {
    expect(
      pathFinder(`
        ......
        ......
        ......
        ......
        ......
        ......
    `)
    ).toBe(true)
  })

  it("reaches exit 3", () => {
    expect(
      pathFinder(`
        .W...
        .W.W.
        .W.W.
        .W.W.
        ...W.
      `)
    ).toBe(true)
  })

  it("fails to reach exit", () => {
    expect(
      pathFinder(`
        .W.
        .W.
        W..
    `)
    ).toBe(false)
  })

  it("fails to reach exit 2", () => {
    expect(
      pathFinder(`
        ......
        ......
        ......
        ......
        .....W
        ....W.
    `)
    ).toBe(false)
  })
})
