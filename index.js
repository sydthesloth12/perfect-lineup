const validateLineup = (lineup) => {
  
  if (playerPosition(lineup) && playerCost(lineup) && playerTeam(lineup) && playerGame(lineup)) {
    return true
  } else return false

    
}

const playerCost = (lineup) => {
  let totalSalary = lineup.reduce((salary, player) => salary += player.salary, 0)

  if (totalSalary > 45000) {
    return false
  } else return true 
}

const playerPosition = (lineup) => {
  const OF = outfield(lineup)
  const pitch = pitcher(lineup)
  const first = firstBase(lineup)
  const second = secondBase(lineup)
  const third = thirdBase(lineup)
  const catchers = catcher(lineup)
  const short = shortStop(lineup)
  
  if (OF && pitch && first && second && third && catchers && short) {
    return true
  }

  return false
  
}

const outfield = (lineup) => {
  const outfieldplayers = lineup.filter((player) => player.position === 'OF')

  if (outfieldplayers.length !== 3) {
    return false
  }

  return true
}

const pitcher = (lineup) => {
  const pitcherplayers = lineup.filter((player) => player.position === 'P')

  if (pitcherplayers.length !== 1) {
    return false
  }

  return true
}

const firstBase = (lineup) => {
  const firstBaseplayers = lineup.filter((player) => player.position === '1B')

  if (firstBaseplayers.length !== 1) {
    return false
  }

  return true
}

const secondBase = (lineup) => {
  const secondBaseplayers = lineup.filter((player) => player.position === '2B')

  if (secondBaseplayers.length !== 1) {
    return false
  }

  return true
}

const thirdBase = (lineup) => {
  const thirdBaseplayers = lineup.filter((player) => player.position === '3B')

  if (thirdBaseplayers.length !== 1) {
    return false
  }

  return true
}

const catcher = (lineup) => {
  const catcherplayers = lineup.filter((player) => player.position === 'C')

  if (catcherplayers.length !== 1) {
    return false
  }

  return true
}

const shortStop = (lineup) => {
  const shortStopPlayers = lineup.filter((player) => player.position === 'SS')

  if (shortStopPlayers.length !== 1) {
    return false
  }

  return true
}


const playerTeam = (lineup) => {
  const uniqueTeams = [...new Set(lineup.map(player => player.teamId))]

  for (let i = 0; i < uniqueTeams.length; i++) {
    const currentTeam = uniqueTeams[i]

    const currentLineup = lineup.filter((player) => player.teamId === currentTeam).length

    if (currentLineup > 2) {
      return false
    }
  }

  return true
}

const playerGame = (lineup) => {
  const uniqueTeams = [...new Set(lineup.map(player => player.gameId))]

    for (let i = 0; i < uniqueTeams.length; i++) {
    const currentTeam = uniqueTeams[i]

    const currentLineup = lineup.filter((player) => player.gameId === currentTeam).length

    if (currentLineup > 2) {
      return false
    }
  }

  return true
}


module.exports = validateLineup
