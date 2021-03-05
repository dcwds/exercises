function LCS(x, y) {
  let res = []
  let prevIdx = 0
  let idx = 0

  for (; idx < x.length; idx++) {
    let val = y[idx]

    console.log(`val: ${val}, curr: ${idx}, prev: ${idx}`)

    if (x.indexOf(val) > prevIdx) {
      console.log(val)
      res = [...res, val]
      prevIdx = idx
    } else {
      console.log(val)
    }
  }

  return res.join("")
}

module.exports = LCS
