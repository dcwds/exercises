const actionMap = require("./action-map")

const traverseTCPStates = (events) => {
  let state = "CLOSED"

  while (events.length) {
    let curr = events.shift()

    if (curr in actionMap[state]) {
      state = actionMap[state][curr]
    } else {
      state = "ERROR"
    }
  }

  return state
}

module.exports = traverseTCPStates
