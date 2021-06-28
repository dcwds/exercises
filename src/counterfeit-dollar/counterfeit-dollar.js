const findCounterfeitDollar = (results) => {
  const parseCoins = (s) => s.replace(/[^A-Z]/g, "").split("")

  const valids = results
    .filter((r) => r.includes("even"))
    .map(parseCoins)
    .flat()

  const suspects = results
    .filter((r) => !r.includes("even"))
    .map(parseCoins)
    .flat()

  const weight = results
    .find((r) => !r.includes("even"))
    .split(" ")
    .pop()

  let cf = null
  let cfWeight = null

  suspects.forEach((c, idx) => {
    if (!valids.includes(c)) {
      cf = c

      if (weight === "up") cfWeight = idx < 4 ? "light" : "heavy"
      if (weight === "down") cfWeight = idx < 4 ? "heavy" : "light"
    }
  })

  return cf ? `${cf} is the counterfeit coin and it is ${cfWeight}.` : "???"
}

module.exports = { findCounterfeitDollar }
