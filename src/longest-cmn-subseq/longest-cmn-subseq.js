function LCS(x, y) {
  let res = ""
  let idx = 0
  let prevIdx = -1

  for (; idx < y.length; idx++) {
    let val = y[idx]
    let valIdx = x.indexOf(val, prevIdx + 1)

    if (valIdx > -1) {
      res += val

      prevIdx = valIdx
    }
  }

  return res
}

module.exports = LCS
