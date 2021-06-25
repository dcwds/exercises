// needs work

const howManyToBeLucky = (s) => {
  s = s.split("")
  let a = s.slice(0, s.length / 2)
  let b = s.slice(s.length / 2)
  let matches = new Set()

  a.forEach((ch) => (b.includes(ch) ? matches.add(ch) : ch))

  const matchDiff = [...matches]
    .map((ch) => s.filter((c) => c === ch).length % 2)
    .reduce((a, b) => a + b)

  return s.filter((ch) => !matches.has(ch)).length + matchDiff
}

module.exports = { howManyToBeLucky }
