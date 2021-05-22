const traverseTCPStates = require("./fsm")

test("solves correctly", () =>
  expect(traverseTCPStates(["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "RCV_FIN"])).toBe(
    "CLOSE_WAIT"
  ))

test("solves correctly 2", () =>
  expect(traverseTCPStates(["APP_PASSIVE_OPEN", "RCV_SYN", "RCV_ACK"])).toBe(
    "ESTABLISHED"
  ))

test("solves correctly 3", () =>
  expect(
    traverseTCPStates([
      "APP_ACTIVE_OPEN",
      "RCV_SYN_ACK",
      "RCV_FIN",
      "APP_CLOSE"
    ])
  ).toBe("LAST_ACK"))

test("solves correctly 4", () =>
  expect(traverseTCPStates(["APP_ACTIVE_OPEN"])).toBe("SYN_SENT"))

test("solves correctly 5", () =>
  expect(
    traverseTCPStates([
      "APP_PASSIVE_OPEN",
      "RCV_SYN",
      "RCV_ACK",
      "APP_CLOSE",
      "APP_SEND"
    ])
  ).toBe("ERROR"))
