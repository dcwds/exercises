function josephus(items, n) {
  let res = []
  let idx = 0

  while (items.length) {
    idx = (idx + n - 1) % items.length
    res = [...res, items[idx]]

    items.splice(idx, 1)
  }

  return res
}

module.exports = josephus
