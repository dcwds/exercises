const getDeniedCountFromUnseatedGroups = (
  oneSeaters,
  twoSeaters,
  groupSizes
) => {
  let vacancyInTwoSeater = false
  let deniedCount = 0

  groupSizes.forEach((size) => {
    if (size > 1) {
      if (twoSeaters) {
        twoSeaters--
      } else {
        deniedCount += size
      }
    } else {
      if (oneSeaters) {
        oneSeaters--
      } else {
        if (twoSeaters) {
          vacancyInTwoSeater = true
          twoSeaters--
        } else if (vacancyInTwoSeater) {
          vacancyInTwoSeater = false
        } else {
          deniedCount += size
        }
      }
    }
  })

  return deniedCount
}

module.exports = { getDeniedCountFromUnseatedGroups }
