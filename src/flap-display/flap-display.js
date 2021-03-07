const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789"

function flapDisplay(lines, rotors) {
  let flippedLines = []

  while (lines.length) {
    let currLine = lines.shift()
    let currRotors = rotors.shift()

    let flippedLine = ""

    currRotors.forEach((n) => {
      let rotation = flap(currLine, n)

      flippedLine += rotation[0]
      currLine = rotation.slice(1)
    })

    flippedLines.push(flippedLine)
  }

  return flippedLines
}

function flap(line, n) {
  let flapped = ""

  line.split("").forEach((char) => {
    flapped += abc[(abc.indexOf(char) + n) % abc.length]
  })

  return flapped
}

module.exports = { flapDisplay, flap }
