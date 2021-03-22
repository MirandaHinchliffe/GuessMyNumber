// Start
var totalScore = 0;
let highscore = 0;
var playerGuess = [];

function resetFunction() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.getElementById("submitBtn").disabled = false;
  document.getElementById("winnerChick").innerHTML = "";
  correctGuesses = 0;
  totalScore = 0;
}

function myFunction() {
  var x, text;
  x = document.getElementById("numBuh").value;
randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
   if (x == randomNumber) {
    text = "Holy cow, you got it!";
    document.getElementById("response").innerHTML = text;
    document.getElementById("answer").innerHTML =
      "The number of your choice was " + randomNumber;
    document.getElementById("yourGuess").innerHTML = "Your choice was " + x;
    totalScore = totalScore + 5;
    document.getElementById("score").innerHTML = "Score: " + totalScore;
    document.getElementById("Guess").innerHTML =
      "Guesses you got right " + ++correctGuesses;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
  } else {
    document.getElementById("yourGuess").innerHTML = "Your choice " + x;
    totalScore = totalScore - 2;
    document.getElementById("score").innerHTML = "Score: " + totalScore;
  }
}
