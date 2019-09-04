
// *******VARIABLES**********
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//Words array
var words = ["magic", "broom", "spell", "charm", "wand", "potion", "muggle", "witch", "wizard", "curse", "quiddich", "quaffle", "seeker", "arithmancy", "divination", "herbology", "magizoology"];

var gameWins = 0;
var gameLosses = 0;
var turnsLeft = 9;

//Picks random word from word array
var wordRandom = words[Math.floor(Math.random() * words.length)];
console.log(wordRandom);

var wordArray = wordRandom.split("")

//Finds how many letters
var answerArray = [];
for (var i = 0; i < wordRandom.length; i++) {
  answerArray[i] = "_";
}
// replace wordRandom's lettersAndDashes underscore with letter pressed
document.getElementById("lettersAndDashes").innerHTML = answerArray.join(" ");

// Stored guesses
var guess = [];

// GET ELEMENTS
var winsNumber = document.getElementById("winsNumber");
winsNumber.innerHTML = gameWins;
var lossesNumber = document.getElementById("lossesNumber");
lossesNumber.innerHTML = gameLosses;
var guessesRemaining = document.getElementById('guessesRemaining');
guessesRemaining.innerHTML = (turnsLeft);

function letterInWord(letter) {
  // the array that will contain the char positions in the currentWord that has the 
  var positions = new Array();
  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i].toLocaleUpperCase() == letter)
      positions.push(i);
  }
  return positions;
}

// These are the key events used to play and to document the letters already used and/or
// letters in the answers
// add update time
document.onkeyup = function (event) {
  var letter = event.key;
  var letterGuessed = letter.toLocaleUpperCase();
  var positions = letterInWord(letterGuessed);
  turnsLeft = turnsLeft - 1;
  guessesRemaining.innerHTML = (turnsLeft);

  // This will alert correct and compare the letter guessed with the current word
  if (positions.length > 0) {
    for (var i = 0; i < positions.length; i++) {
      answerArray[positions[i]] = letterGuessed;
    }

    // replace progress Word underscore with letter pressed
    document.getElementById("lettersAndDashes").innerHTML = answerArray.join(" ");
  } else {
    document.getElementById("lettersGuessed").innerHTML += letterGuessed + " ";
  }
}



// if (guesses === );
// alert('You lose! The word is "wordRandom"!');


// for ( var i=0; i < wordRandom.length; i++ ) {
//   if (guess===chosenWord[i]) {
//       answerArray[i] = guess;
//       founded = true;
//       document.getElementById("wordGuess").innerHTML = answerArray
//   }
// }

