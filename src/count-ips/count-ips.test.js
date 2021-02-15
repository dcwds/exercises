const ipsBetween = require("./count-ips")

describe("count ip addresses", () => {
  it("counts the number of addresses between inputs correctly 1", () => {
    expect(ipsBetween("10.0.0.0", "10.0.0.50")).toEqual(50)
  })

  it("counts the number of addresses between inputs correctly 2", () => {
    expect(ipsBetween("20.0.0.10", "20.0.1.0")).toEqual(246)
  })

  it("counts the number of addresses between inputs correctly 3", () => {
    expect(ipsBetween("170.0.0.0", "170.1.0.0")).toEqual(65536)
  })

  it("counts the number of addresses between inputs correctly 4", () => {
    expect(ipsBetween("180.0.0.0", "181.0.0.0")).toEqual(16777216)
  })
})
