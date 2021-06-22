const outed = (memberRatings, boss) => {
  const failureThreshold = 5
  let score = 0

  for (const [member, rating] of Object.entries(memberRatings)) {
    if (member === boss) score += rating * 2

    score += rating
  }

  // take the average
  score = score / Object.keys(memberRatings).length

  return score > failureThreshold ? "Nice Work Champ!" : "Get Out Now!"
}

module.exports = { outed }
