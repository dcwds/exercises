const densities = {
  H: 1.36,
  W: 1.0,
  A: 0.87,
  O: 0.8
}

const separateLiquids = (glass) => {
  if (!glass.length) return []

  const glassWidth = glass[0].length
  let idx = 0
  let res = []

  // my first implementation used the flat() method
  // but codewars does not allow it
  glass = glass
    .reduce((prev, curr) => [...prev, ...curr])
    .sort((a, b) => densities[a] - densities[b])

  while (idx < glass.length) {
    res.push(glass.slice(idx, idx + glassWidth))

    idx += glassWidth
  }

  return res
}

module.exports = separateLiquids
