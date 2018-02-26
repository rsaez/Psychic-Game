//declare game variables
var input;
var possible = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
//Initialize game variables
var guessesLeft = 9;
var banner = "";
var guesses = "";
// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = possible.charAt(Math.floor(Math.random() * possible.length));

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  input = event.key;

  //game mechanics
  if(input != computerGuess){
    guessesLeft--;
    guesses = guesses + input + ", ";
    banner = "";
  }

  //loose mechanics
  if(guessesLeft == 0){
    losses++;
    banner = "AH AH AH You didn't say the magic word!"

    //Reset game
    guessesLeft = 9;
    guesses = "";
    computerGuess = possible.charAt(Math.floor(Math.random() * possible.length));
  }

  //win mechanics
  if(input == computerGuess){
    wins++;
    banner = "You win!"

    //Reset game
    guessesLeft = 9;
    guesses = "";
    computerGuess = possible.charAt(Math.floor(Math.random() * possible.length));
  }

  // console.log("Wins: " + wins);
  document.getElementById("user-wins").innerHTML = wins;
  document.getElementById("user-losses").innerHTML = losses;
  document.getElementById("user-guessesLeft").innerHTML = guessesLeft;
  // document.getElementById("comp-guesses").innerHTML = computerGuess;
  document.getElementById("user-guesses").innerHTML = guesses;
  document.getElementById("banner").innerHTML = banner;


};
