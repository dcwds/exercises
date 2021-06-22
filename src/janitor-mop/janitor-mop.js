const mopLetters = (word) => {
  const abc = "abcdefghijklmnopqrstuvwxyz"
  const uniqChars = [...new Set(word.split(""))]
  let res = abc.split("").map(() => 0)

  uniqChars.forEach((ch) => {
    const pos = abc.indexOf(ch)
    const firstOccurance = word.indexOf(ch)
    const lastOccurance = word.lastIndexOf(ch)

    if (lastOccurance === -1) res.splice(pos, 1, 1)
    // add 1, as first occurance of char should be inclusive
    else res.splice(pos, 1, lastOccurance - firstOccurance + 1)
  })

  return res
}

module.exports = { mopLetters }
