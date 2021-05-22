const separateLiquids = require("./dont-drink-the-water")

test("solves correctly", () =>
  expect(
    separateLiquids([
      ["H", "H", "W", "O"],
      ["W", "W", "O", "W"],
      ["H", "H", "O", "O"]
    ])
  ).toEqual([
    ["O", "O", "O", "O"],
    ["W", "W", "W", "W"],
    ["H", "H", "H", "H"]
  ]))

test("solves correctly 2", () =>
  expect(
    separateLiquids([
      ["A", "A", "O", "H"],
      ["A", "H", "W", "O"],
      ["W", "W", "A", "W"],
      ["H", "H", "O", "O"]
    ])
  ).toEqual([
    ["O", "O", "O", "O"],
    ["A", "A", "A", "A"],
    ["W", "W", "W", "W"],
    ["H", "H", "H", "H"]
  ]))

test("solves correctly 3", () =>
  expect(separateLiquids([["A", "H", "W", "O"]])).toEqual([
    ["O", "A", "W", "H"]
  ]))

test("solves correctly 4", () =>
  expect(separateLiquids([["A"], ["H"], ["W"], ["O"]])).toEqual([
    ["O"],
    ["A"],
    ["W"],
    ["H"]
  ]))

test("solves correctly 5", () => expect(separateLiquids([])).toEqual([]))
