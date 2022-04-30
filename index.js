const validateLineup = (lineup) => {
  let currentLineup = { ...lineup }


  if (playerPosition() && playerCost() && playerTeam() && playerGame()) return // true or false
}

const playerCost = (lineup) => {
  let totalSalary = lineup.reduce((salary, player) => salary += player.salary, 0)

  if (totalSalary > 45000) {
    return false
  }
}

const playerPosition = (lineup) => {
  // lineup.position 
  // lineup.position 'OF' x3
}

// Function that loops to evaluate the player positions
// Function that loops through the data to evaluate total cost
// Function that loops through the data to evlauate teams
// Function that loops through the data to evaluate games 


module.exports = validateLineup
