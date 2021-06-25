/**
 * - Shifts each letter by provided number (circularly).
 * - Replaces each digit with its complement to 9.
 * - Non-alphanumeric chars are preserved.
 * - Odd indicies in lowercase, even in uppercase.
 * - Resulting string is reversed.
 * @param {string} s - A passphrase to be scrambled.
 * @param {number} n - A number that determines how much a letter should be shifted.
 * @returns {string} A scrambled passphrase.
 */

const scrambledPass = (s, n) => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
  const abc = chars.slice(0, 26)

  return s
    .toLowerCase()
    .split("")
    .map((ch) => {
      const pos = chars.indexOf(ch)

      // not an alphanumeric char
      if (pos === -1) return ch

      return pos <= 25
        ? abc[(abc.indexOf(ch) + n) % abc.length]
        : String(9 - Number(ch))
    })
    .map((ch, idx) => (idx % 2 ? ch : ch.toUpperCase()))
    .reverse()
    .join("")
}

module.exports = { scrambledPass }
