const getChairsFromMeetingRooms = (rooms, need) => {
  if (need < 1) return "Game On"

  let res = []
  const freeChairsPerRoom = rooms.map((r) => {
    const freeChairs = r[1] - r[0].length

    return Math.max(0, freeChairs)
  })

  for (const chairs of freeChairsPerRoom) {
    if (!need) break

    res = [...res, chairs]
    need -= chairs
  }

  return need ? "Not enough!" : res
}

module.exports = { getChairsFromMeetingRooms }
