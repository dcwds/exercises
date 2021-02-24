function getNavigableNeighbors(row, col, visited, maze) {
  const directions = [
    [row - 1, col], // N
    [row + 1, col], // S
    [row, col - 1], // W
    [row, col + 1] // E
  ].filter((d) => Math.min(...d) > -1 && Math.max(...d) < maze.length)

  return directions.reduce((res, curr) => {
    if (maze[curr[0]][curr[1]] !== "W" && !visited.has(String(curr)))
      return [curr, ...res]
    else return res
  }, [])
}

function pathFinder(maze) {
  let queue = [[0, 0]]
  let visited = new Set()
  let foundExit = false

  maze = maze
    .trim()
    .split("\n")
    .map((s) => s.trim())

  while (queue.length) {
    const curr = queue.shift()
    const neighbors = getNavigableNeighbors(curr[0], curr[1], visited, maze)

    if (
      JSON.stringify(neighbors).indexOf(
        JSON.stringify([maze.length - 1, maze.length - 1])
      ) > -1
    ) {
      foundExit = true
      break
    } else {
      queue = [...neighbors, ...queue]

      visited.add(String(curr))
    }
  }

  return foundExit
}

module.exports = pathFinder
