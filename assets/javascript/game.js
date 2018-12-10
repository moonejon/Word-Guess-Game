// GLOBAL VARIABLES

var wins = 0;
var emptySpaces = [];
var lettersGuessedArray = [];
var lettersGuessed = "Letters guessed: ";
var underscore = "_ ";
var monsters = [
  "daleks",
  "zarbi",
  "xerons",
  "mechanoids",
  "autons",
  "axons",
  "zygons"
];

// GAME LOGIC
function startGame() {
  // Setting random monster
  var randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
  var remainingGuesses = randomMonster.length + 5;

  //resetting blank spaces
  function emptyWord(randomWord) {
    for (i = 0; i < randomWord.length; i++) {
      emptySpaces.push(underscore);
    }
    document.getElementById("emptyWord").innerHTML = emptySpaces.join("");
  }
  emptySpaces = [];
  emptyWord(randomMonster);
  lettersGuessedArray = [];
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("remainingGuesses").innerHTML =
    "Remaining guesses: " + remainingGuesses;

  document.getElementById("lettersGuessed").innerHTML = "Letters guessed: ";

  //handling user input
  document.onkeypress = function(event) {
    var userGuess = event.key.toLowerCase();

    if (lettersGuessedArray.indexOf(userGuess) == -1) {
      lettersGuessedArray.push(userGuess);
      document.getElementById("lettersGuessed").innerHTML =
        "Letters guessed: " + lettersGuessedArray;
      remainingGuesses -= 1;
      document.getElementById("remainingGuesses").innerHTML =
        "Remaining guesses: " + remainingGuesses;
      restartGame();
    }

    if (randomMonster.includes(userGuess)) {
      var index = randomMonster.indexOf(userGuess);
      emptySpaces.splice(index, 1, userGuess);
      document.getElementById("emptyWord").innerHTML = emptySpaces.join("");
    }
  };

  //handling wins and losses
  function restartGame() {
    if (emptySpaces.indexOf("_ ") == -1 && remainingGuesses >= 0) {
      wins++;
      document.getElementById("wins").innerHTML = "Wins: " + wins;
      startGame();
    } else if (remainingGuesses < 0) {
      startGame();
    }
  }
}

startGame();
