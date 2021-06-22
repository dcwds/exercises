const getCommonsCount = (s1, s2) => {
  let commonsCount = 0
  let idx = 0

  for (; idx < s1.length; idx++) {
    if (s1[idx] === s2[idx]) commonsCount++
  }

  return commonsCount
}

const getCommonsFromCombination = (s, ss) => {
  let commonsCount = 0

  ss.forEach((v) => {
    commonsCount += getCommonsCount(s, v)
  })

  return commonsCount
}

const posAverage = (s) => {
  s = s.split(",").map((v) => v.trim())

  let commonsCount = 0

  s.forEach((v, idx) => {
    commonsCount += getCommonsFromCombination(v, s.slice(idx + 1))
  })

  return (
    (commonsCount / (((s.length * (s.length - 1)) / 2) * s[0].length)) *
    100
  ).toFixed(10)
}

module.exports = { posAverage }
