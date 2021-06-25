/**
 * Sort odd numbers in ascending order
 * while leaving even numbers in their original position.
 * @param {Array.<number>} ns - A numbers list.
 * @returns {Array.<number>} A sorted numbers list.
 */
const sortOdds = (ns) => {
  let odds = ns.filter((n) => n % 2 !== 0).sort((a, b) => a - b)

  return ns.map((n) => (n % 2 ? odds.shift() : n))
}

module.exports = { sortOdds }
