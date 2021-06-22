const off = (n) => {
  let switches = Array.from({ length: n }, (_, idx) => ({
    n: idx + 1,
    on: true
  }))
  let count = 1

  while (count <= n) {
    switches = switches.map((v) => ({
      n: v.n,
      on: v.n % count === 0 ? !v.on : v.on
    }))
    count++
  }

  return switches.filter((v) => !v.on).map((v) => v.n)
}

module.exports = { off }
