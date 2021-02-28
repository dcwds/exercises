function calc(
  exp,
  ops = [
    ["*", "/"],
    ["+", "-"]
  ]
) {
  let opMap = {
    "*": (nums) => nums.reduce((a, b) => a * b),
    "/": (nums) => nums.reduce((a, b) => a / b),
    "+": (nums) => nums.reduce((a, b) => a + b),
    "-": (nums) => nums.reduce((a, b) => a - b)
  }
  let currOps = ops.shift()
  let re = new RegExp(
    currOps.map((op) => `(?<=\\s|^)\\S+?\\s\\${op}\\s\\S+?(?=\\s|$)`).join("|")
  )

  while (re.test(exp)) {
    exp = exp.replace(re, (val) => {
      let op = val.match(/\s.\s/)[0].trim()
      let nums = val.split(op).map(Number)

      return opMap[op](nums)
    })
  }

  if (!ops.length) {
    return Number(exp)
  }

  return calc(exp, ops)
}

module.exports = calc
