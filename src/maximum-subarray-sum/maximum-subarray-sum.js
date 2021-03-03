function maxSequence(nums) {
  let min = 0
  let sum = 0
  let res = 0

  nums.forEach((n) => {
    sum += n
    min = Math.min(sum, min)
    res = Math.max(res, sum - min)
  })

  return res
}

module.exports = maxSequence
