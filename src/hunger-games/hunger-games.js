const foodChain = {
  antelope: ["grass"],
  "big-fish": ["little-fish"],
  bug: ["leaves"],
  bear: ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
  chicken: ["bug"],
  cow: ["grass"],
  fox: ["chicken", "sheep"],
  giraffe: ["leaves"],
  lion: ["antelope", "cow"],
  panda: ["leaves"],
  sheep: ["grass"]
}

function whoEatsWho(zoo) {
  let res = [zoo]
  let zooArr = zoo.split(",")
  let edible = []
  let idx = 0

  do {
    edible = []
    idx = 0

    for (; idx < zooArr.length; idx++) {
      let curr = zooArr[idx]
      let prev = zooArr[idx - 1]
      let next = zooArr[idx + 1]

      if (Object.keys(foodChain).includes(curr)) {
        if (prev && foodChain[curr].includes(prev)) {
          zooArr.splice(idx - 1, 1)

          res.push(`${curr} eats ${prev}`)
          edible.push(true)

          break
        }

        if (next && foodChain[curr].includes(next)) {
          zooArr.splice(idx + 1, 1)

          res.push(`${curr} eats ${next}`)
          edible.push(true)

          break
        }
      } else {
        edible.push(false)
      }
    }
  } while (edible.some((v) => v === true))

  res.push(zooArr.join(","))

  return res
}

module.exports = whoEatsWho
