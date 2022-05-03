const validateLineup = (lineup) => {
  let currentLineup = { ...lineup }


  if (playerPosition() && playerCost() && playerTeam() && playerGame()) return // true or false
}

const playerCost = (lineup) => {
  let totalSalary = lineup.reduce((player, currentSalary) => currentSalary += player.salary, 0)

  if (totalSalary > 45000) {
    return false
  }
}

const playerPosition = (lineup) => {
  const OF = outfield(lineup)
  const pitch = pitcher(lineup)
  const first = firstBase(lineup)
  const second = secondBase(lineup)
  const third = thirdBase(lineup)
  const catchers = catcher(lineup)
  const short = shortStop(lineup)

}

const outfield = (lineup) => {
  const outfieldplayers = lineup.filter((player) => player.position === 'OF')
  
  if (outfieldplayers.length !== 3) {
    return false
  } else return true

}

const pitcher = (lineup) => {
  const pitcherplayers = lineup.filter((player) => player.position === 'P')
  
  if (pitcherplayers.length !== 1) {
    return false
  } else return true

}

const firstBase = (lineup) => {
  const firstBaseplayers = lineup.filter((player) => player.position === '1B')
  
  if (firstBaseplayers.length !== 1) {
    return false
  } else return true

}

const secondBase = (lineup) => {
  const secondBaseplayers = lineup.filter((player) => player.position === '2B')
  
  if (secondBaseplayers.length !== 1) {
    return false
  } else return true

}

const thirdBase = (lineup) => {
  const thirdBaseplayers = lineup.filter((player) => player.position === '3B')
  
  if (thirdBaseplayers.length !== 1) {
    return false
  } else return true

}

const catcher = (lineup) => {
  const catcherplayers = lineup.filter((player) => player.position === 'C')
  
  if (catcherplayers.length !== 1) {
    return false
  } else return true

}

const shortStop = (lineup) => {
  const shortStopPlayers = lineup.filter((player) => player.position === 'SS')
  
  if (shortStopPlayers.length !== 1) {
    return false
  } else return true

}


const playerTeam = (lineup) => {
  return
}


module.exports = validateLineup
