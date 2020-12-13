function court(me, numberOfJudges, otherPeople) {

  // list all people in waiting room, sorted alphabetically
  const allPeoples = [me, ...otherPeople.split(' ')]
  allPeoples.sort((a, b) => a.localeCompare(b))

  // find my position in waiting list
  const position = allPeoples.findIndex(people => people === me) + 1

  // determine which batch i'm belonging to
  const batchSize = numberOfJudges
  const batchNo = Math.ceil(position / batchSize)

  // determine when hearing will ends
  const hearingDuration = 30 // in minutes
  const hearingEndsAt = hearingDuration * batchNo

  return hearingEndsAt
}

console.log(court('Jules', 3, 'Adam Betty Frank Mike')) //-> 60
console.log(court('Zane', 1, 'Mark Hank Ana Vivian')) // -> 150