const numWords = {
  0: ["zero"],
  1: ["one", "ten"],
  2: ["two", "twenty"],
  3: ["three", "thirty"],
  4: ["four", "forty"],
  5: ["five", "fifty"],
  6: ["six", "sixty"],
  7: ["seven", "seventy"],
  8: ["eight", "eighty"],
  9: ["nine", "ninety"],
  11: ["eleven"],
  12: ["twelve"],
  13: ["thirteen"],
  14: ["fourteen"],
  15: ["fifteen"],
  16: ["sixteen"],
  17: ["seventeen"],
  18: ["eighteen"],
  19: ["nineteen"]
}

const placeValues = {
  2: "hundred",
  3: "thousand",
  5: "hundred"
}

const placeToWords = {
  0: 0, // ones
  1: 1, // tens
  2: 0, // hundreds
  3: 0, // thousands
  4: 1, // tens of thousands
  5: 0 // hundreds of thousands
}

function getWords(curr, next, len) {
  let vals = numWords[curr]

  if ((len === 1 || len === 4) && next !== "0")
    return vals[placeToWords[len]] + "-"
  else return vals[placeToWords[len]]
}

function number2words(n) {
  if (numWords[n]) {
    return numWords[n][0]
  }

  n = String(n).split("")

  let res = ""
  let skipNext = false

  while (n.length) {
    let curr = n.shift()
    let next = n[0]
    let len = n.length
    let placeValue = placeValues[len] ? ` ${placeValues[len]} ` : ""

    // Handle skip cases
    if (skipNext || curr === "0") {
      skipNext = false

      // If the remainder of n is not all zeroes, append placeValue.
      if (n.filter((v) => v === "0").length !== n.length) {
        res += placeValue
      }

      continue
    }

    // Solve numbers between 11-19
    else if ((len === 1 || len === 4) && numWords[curr + next]) {
      skipNext = true
      res += numWords[curr + next][0]
    }

    // Solve the rest
    else {
      res += getWords(curr, next, len)
      res += placeValue
    }
  }

  return res.trim()
}

module.exports = number2words
