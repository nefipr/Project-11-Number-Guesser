let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  let randomTarget = Math.floor(Math.random() * 10);
  return randomTarget;
}

function getAbsoluteDistance(valueUser, valueTarget){
  if (valueUser >= 0 && valueUser <= 9){
    return Math.abs(valueUser - valueTarget);
  }else{
    window.alert('This is not a value between 0 and 9');
  }
}

function compareGuesses(humanGuess, computerGuess, secretTarget){
  let computer = getAbsoluteDistance(computerGuess, secretTarget);
  let human = getAbsoluteDistance(humanGuess, secretTarget);
  
  if (human < computer){
      return true;
  } else if (computer < human){
      return false;
  } else {
      return true;
  }
}

const updateScore = winner => {
  switch (winner){
      case 'human':
          humanScore += 1;
          break;
      default:
          computerScore += 1;            
          break;
  }
}

const advanceRound = () => currentRoundNumber += 1;