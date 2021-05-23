const suitMarkers = {
  c: 0,
  d: 13,
  h: 26,
  s: 39,
  39: "s",
  26: "h",
  13: "d",
  0: "c"
}

const deckOrder = "A23456789TJQK"

const encode = (cards) => {
  let res = []

  while (cards.length) {
    const curr = cards.shift()

    res = [...res, deckOrder.indexOf(curr[0]) + suitMarkers[curr[1]]]
  }

  return res.sort((a, b) => a - b)
}

const decode = (cards) => {
  let res = []

  cards = cards.sort((a, b) => a - b)

  while (cards.length) {
    const curr = cards.shift()
    const len = deckOrder.length
    const face = deckOrder[((curr % len) + len) % len]

    res = [...res, `${face}${suitMarkers[curr - deckOrder.indexOf(face)]}`]
  }

  return res
}

module.exports = { encode, decode }
