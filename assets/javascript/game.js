var monsters = [
  "daleks",
  "zarbi",
  "xerons",
  "mechanoids",
  "autons",
  "axons",
  "zygons"
];

var randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
console.log(randomMonster);

var lettersGuessedArray = [];

var lettersGuessed = "Letters guessed: " + lettersGuessedArray;
var underscore = "_ ";
var emptySpaces = [];
function emptyWord(randomWord) {
  for (i = 0; i < randomWord.length; i++) {
    emptySpaces.push(underscore);
  }
  var emptySpacesWithoutCommas;
  document.getElementById("emptyWord").innerHTML = emptySpaces.join("");
}

document.getElementById("randomMonster").innerHTML = randomMonster;

emptyWord(randomMonster);
function replaceWithGuess(userGuess) {
  if (randomMonster.includes(userGuess)) {
    var index = randomMonster.indexOf(userGuess);
    emptySpaces.splice(index, 1, userGuess);
    document.getElementById("emptyWord").innerHTML = emptySpaces.join("");
    console.log(emptySpaces);
    console.log(userGuess);
  }
}

document.onkeypress = function(event) {
  var userGuess = event.key;
  console.log(userGuess);
  if (lettersGuessedArray.includes(userGuess) == "false") {
    lettersGuessedArray.push(userGuess);
    console.log(lettersGuessedArray);
    document.getElementById(
      "lettersGuessed"
    ).innerHTML = lettersGuessedArray.join("");
  }

  randomMonster.for(replaceWithGuess(userGuess));
};
