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
  let numberOfOF= []
  let restOfPositions = []

  lineup.map((player) => player.position 
  if (player.position === 'OF'){
    
  })
}

const playerTeam = (lineup) => {
  return
}

// Function that loops to evaluate the player positions
// Function that loops through the data to evaluate total cost
// Function that loops through the data to evlauate teams
// Function that loops through the data to evaluate games 


module.exports = validateLineup


//array.map() <--- performs a funciton on every value in the array, keeps the same
//number of starting # of array data, just changing it in some way 

//array/filter <--- creating a new array, performing a function (sometimes), 


// array.reduce((argument, accumulator) => accumulator performing a function, reducing it into one, 0 <---- starting value)