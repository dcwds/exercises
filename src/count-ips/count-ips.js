const ipsBetween = (start, end) => {
  const subBlockMap = [16777216, 65536, 256, 1]

  const getIPNum = (s) =>
    s
      .match(/\d+/g)
      .map(Number)
      .reduce((a, b, idx) => a + b * subBlockMap[idx], 0)

  return getIPNum(end) - getIPNum(start)
}

module.exports = ipsBetween
