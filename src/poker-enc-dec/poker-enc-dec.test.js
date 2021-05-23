const { encode, decode } = require("./poker-enc-dec")

test("encodes correctly", () => {
  expect(encode(["5h", "7c", "Qh", "Qs", "Ad"])).toEqual([6, 13, 30, 37, 50])
  expect(encode(["Td", "8c", "Ks"])).toEqual([7, 22, 51])
  expect(encode(["Qh", "5h", "Ad"])).toEqual([13, 30, 37])
  expect(encode(["8c", "Ks", "Td"])).toEqual([7, 22, 51])
  expect(encode(["Qh", "Ad", "5h"])).toEqual([13, 30, 37])
})

test("decodes correctly", () => {
  expect(decode([7, 22, 51])).toEqual(["8c", "Td", "Ks"])
  expect(decode([13, 30, 37])).toEqual(["Ad", "5h", "Qh"])
  expect(decode([7, 51, 22])).toEqual(["8c", "Td", "Ks"])
  expect(decode([13, 37, 30])).toEqual(["Ad", "5h", "Qh"])
  expect(decode([50, 6, 13, 30, 37])).toEqual(["7c", "Ad", "5h", "Qh", "Qs"])
})
