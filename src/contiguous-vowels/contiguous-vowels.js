const sortStringsByVowels = (strings) => {
  const vowels = "aeiouAEIOU"

  const getLargestCV = (s) => {
    const chars = s.split("")
    let cv = []
    let allCVs = []

    for (const [idx, char] of chars.entries()) {
      if (vowels.indexOf(char) > -1) {
        cv.push(char)

        // push substring on last iteration
        if (idx === chars.length - 1) allCVs.push(cv)
      } else {
        if (cv.length) {
          allCVs.push(cv)
          cv = []
        }
      }
    }

    return allCVs.length
      ? allCVs.sort((a, b) => b.length - a.length)[0].join("")
      : ""
  }

  return strings.sort((a, b) => getLargestCV(b).length - getLargestCV(a).length)
}

module.exports = sortStringsByVowels
