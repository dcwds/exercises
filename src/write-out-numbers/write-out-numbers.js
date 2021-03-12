// supports numbers 0-999999

// n -> Array of Strings
// If length is greater than 2 (thousands position), split into two Arrays (888888 -> ["8", "8", "8"], ["8", "8", "8"])
// Array length determines number position
// e.g. length of 2 (["8", "8", "8"])
// - skip zeroes unless Array length of zero
// - 8 -> template {n} hundred -> find 8 in numbers map and access its value circularly given current Array length (2, therefore eight) -> "eight hundred"

const numbersMap = {
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

function getQueue(n) {
  let queue = []

  n = String(n).split("")

  if (n.length > 3) {
    queue.push(n.slice(0, n.length - 3), n.slice(n.length - 3))
  } else {
    queue.push(n)
  }

  return queue
}

function getWords(curr, next, len) {
  let vals = numbersMap[curr]
  let res = vals[((len % vals.length) + vals.length) % vals.length]

  switch (len) {
    case 2:
      return `${res} hundred `
    case 1:
      return next !== "0" ? (res += "-") : res
    default:
      return res
  }
}

function number2words(n) {
  if (numbersMap[n]) {
    return numbersMap[n][0]
  }

  let res = ""

  // Make queue from number, splitting at hundredth position.
  let queue = getQueue(n)

  while (queue.length) {
    let num = queue.shift()

    while (num.length) {
      let curr = num.shift()
      let next = num[0]

      // Skip zeroes
      if (curr === "0") {
        continue
      }

      // Solve numbers between 11-19
      else if (num.length < 2 && numbersMap[curr + next]) {
        res += numbersMap[curr + next][0]

        break
      }

      // Solve the rest
      else {
        res += getWords(curr, next, num.length)
      }
    }
  }

  return res.trim()
}

module.exports = number2words
