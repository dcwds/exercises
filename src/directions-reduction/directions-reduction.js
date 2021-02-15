const dirReduc = (dirs) => {
  let dirsStr = dirs.join(" ")

  const oppositesRegex = /(NORTH SOUTH|SOUTH NORTH|EAST WEST|WEST EAST)/g

  while (dirsStr.match(oppositesRegex)) {
    dirsStr = dirsStr.replace(oppositesRegex, "").replace(/\s\s+/g, " ").trim()
  }

  return dirsStr ? dirsStr.split(" ") : []
}

module.exports = dirReduc
