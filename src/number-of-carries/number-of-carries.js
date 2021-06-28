const numberOfCarries = (a, b) => {
  const asDigits = (n) => String(n).split("").map(Number)
  let aDigits = asDigits(a)
  let bDigits = asDigits(b)

  const max = Math.max(aDigits.length, bDigits.length)
  const min = Math.min(aDigits.length, bDigits.length)

  const zeroes = Array.from({ length: max - min }, () => 0)

  if (min === aDigits.length) aDigits = [...zeroes, ...aDigits]
  else bDigits = [...zeroes, ...bDigits]

  aDigits.reverse()
  bDigits.reverse()

  let carryover = 0
  let carryCount = 0

  aDigits.forEach((n, idx) => {
    const sum = n + bDigits[idx] + carryover

    if (sum % 10 !== sum) {
      carryover = 1
      carryCount += 1
    }
  })

  return carryCount
}

module.exports = { numberOfCarries }
