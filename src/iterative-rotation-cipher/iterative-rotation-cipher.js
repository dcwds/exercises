const IterativeRotationCipher = {}

IterativeRotationCipher.encode = function (n, s) {
  return rotation(n, s, n)
}

IterativeRotationCipher.decode = function (s) {
  const n = Number(s.slice(0, s.indexOf(" ")))

  s = s.slice(s.indexOf(" ") + 1, s.length)

  return rotation(n, s, n, false)
}

function rotation(n, s, count, encode = true) {
  if (count === 0) {
    return encode ? `${n} ${s}` : s
  } else {
    const { s: str, spaces } = encode
      ? parseSpaces(s)
      : parseSpaces(rotateSubstrings(n, s, false))

    if (encode) {
      s = rotate(n, str)
      s = placeSpaces(spaces, s)
      s = rotateSubstrings(n, s)
    } else {
      s = rotate(n, str, false)
      s = placeSpaces(spaces, s)
    }

    count--

    return encode ? rotation(n, s, count) : rotation(n, s, count, false)
  }
}

function parseSpaces(s) {
  let spaces = []
  let offset = 0

  while (s.indexOf(" ") > -1) {
    spaces = [...spaces, s.indexOf(" ") + offset]
    s = s.replace(" ", "")
    offset++
  }

  return {
    s,
    spaces
  }
}

function placeSpaces(spaces, s) {
  while (spaces.length) {
    let curr = spaces.shift()

    s = `${s.slice(0, curr)} ${s.slice(curr, s.length)}`
  }

  return s
}

function rotate(n, s, encode = true) {
  if (encode)
    return `${s.slice(s.length - n, s.length)}${s.slice(0, s.length - n)}`
  else return `${s.slice(n, s.length)}${s.slice(0, n)}`
}

function rotateSubstrings(n, s, encode = true) {
  let substrings = s.split(" ")
  let count = n

  while (count > 0) {
    substrings = substrings.map((str) => {
      if (encode)
        return `${str.slice(str.length - 1, str.length)}${str.slice(
          0,
          str.length - 1
        )}`
      else return `${str.slice(1, str.length)}${str.slice(0, 1)}`
    })

    count--
  }

  return substrings.join(" ")
}

module.exports = IterativeRotationCipher
