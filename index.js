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
  const catch = catcher(lineup)
  const short = shortStop(lineup)

}

const outfield = (lineup) => {
  const outfieldplayers = lineup.filter((player) => player.position === 'OF')
  
  if (outfieldplayers.lengt !== 3) {
    return false
  } else return true

}

const pitcher = (lineup) => {
  const pitcherplayers = lineup.filter((player) => player.position === 'P')
  
  if (pitcherplayers.lengt !== 1) {
    return false
  } else return true

}


const playerTeam = (lineup) => {
  return
}


module.exports = validateLineup
