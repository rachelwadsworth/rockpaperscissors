const arr = ['rock', 'boomerang', 'thunderstick'];
let rand = "";
let wins = 0;
let losses = 0;
let ties = 0;

function chooseWeapon(weapon) {
  rand = arr[Math.floor(Math.random() * 3)];
  let choice = document.getElementById("choice");
  choice.innerHTML = `You chose ${weapon}, Immortal Joe chose ${rand}.`;
  chooseResult(weapon, rand);
}

function chooseResult(weapon, rand)  {
  if(weapon === 'rock' && rand === 'thunderstick' ||
     weapon === 'boomerang' && rand === 'rock' ||
     weapon === 'thunderstick' && rand === 'boomerang') {
      let result = document.getElementById("result");
      result.innerHTML = 'Freeeedommm!!';
     tally('win');
  }   
  else if(weapon === 'rock' && rand === 'boomerang' || 
          weapon === 'boomerang' && rand === 'thunderstick' ||
          weapon === 'thunderstick' && rand === 'rock') {
            let result= document.getElementById("result");
            result.innerHTML = 'You Know, Hope Is A Mistake. If You Can't Fix What's Broken, You'll, Uhhhh...You'll Go Insane.';
    tally('lose'); 
  }   
  else {
    let result= document.getElementById("result");
    result.innerHTML = 'We share blood. We are not brothers.'; 
    tally('tie');
  }   
}

function tally(score) {
  if(score === 'win') {
    let setWins = document.getElementById("wins");
    setWins.innerHTML = wins += 1;
  }
  else if(score === 'lose') {
    let setLosses = document.getElementById("losses");
    setLosses.innerHTML = losses += 1;
  }
  else {
    let setTies = document.getElementById("ties");
    setTies.innerHTML = ties += 1;
  }
}