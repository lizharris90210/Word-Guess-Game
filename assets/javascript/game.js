
// *******VARIABLES**********
var alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ]

//Words array
var words = ["magic", "broom", "spell", "charm", "wand", "potion", "muggle", "witch", "wizard", "curse", "quiddich", "quaffle", "seeker", "arithmancy", "divination", "herbology", "magizoology"];

//Picks random word from word array
var wordRandom = words[Math.floor(Math.random() * words.length)];
console.log(wordRandom);

//Finds how many letters
var answerArray = [];
for (var i = 0; i < wordRandom.length; i++) {
   answerArray[i] = "_";
}
// replace progress Word underscore with letter pressed
//  document.getElementById("guess").innerHTML = words.join(" ");
//  document.getElementById("lettersGuessed").innerHTML += lettersGuessed + " ";

var remainingLetters = [];
// (wordRandom.length - "_");
// if ('wordRandom.length' < 1); alert('You Win!')

// Stored guesses
var guess= [];
document.getElementById(lettersAndDashes);
guesses.innerHTML= lettersAndDashes;
console.log(guess); 

// replace progress Word underscore with letter pressed
document.getElementById("lettersAndDashes").innerHTML = answerArray.join(" ");

// GET ELEMENTS
var winsNumber = (wordRandom.length < 1)
document.getElementById("winsNumber");
winsNumber.innerHTML= 0;
var losses = document.getElementById("losses");
lossesNumber.innerHTML= 0;
answerArray.innerHTML= wordRandom.join;
var lettersGuessed = document.getElementById("lettersGuessed");
var letter = document.getElementById('letter');
letter.innerHTML = (wordRandom.length + 5)



// Guesses ul
    result = function (guesses) {
      wordHolder = document.getElementById('lettersAndDashes').innerHTML= "lettersAndDashes";
  
      for (var j = 0; j < wordRandom.length; j++) {
        correct.setAttribute('id', 'my-word');
        guesses = document.createElement('li');
        guesses.setAttribute('class', 'guess');
        if (wordRandom[j] === "-") {
          guesses.innerHTML = "-";
          space = 1;
        } else {
          guesses.innerHTML = "_";
        }
  
        guesses.push(guesses);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
// Correct guess wins!
for (var k = 0; k < guess.length; k++) {
   if (counter + space === guess.length) {
     guess.innerHTML = "You win!"
   }}
//****************END GAME LOOP**********//


// OnClick Function
check = function () {
   list.onkeypress= function () {
     var guess = (this.innerHTML);
     this.setAttribute("class", "active");
     this.onkeypress = null;
     for (var l = 0; l < wordRandom.length; l++) {
       if (wordRandom[l] === guesses) {
         guesses[l].innerHTML = guesses;
         counter += 1;
       } 
     }
     var k = (wordRandom.indexOf(guesses));
     if (k === -1) {
       winsNumber -= 1;
     } else {
       comments();
     }
   }
 }
//  Replace word with dashes
 wordRandom = wordRandom.replace("-");

function newFunction() {
  return "guesses";
}

function letterInWord(letter) {
  // the array that will contain the char positions in the currentWord that has the 
  var positions = new Array();
  for (i = 0 ; i < wordRandom.length; i++) {
      if (wordRandom[i] === letter)
          positions.push(i);
  }
  return positions;
}

// return number of letters that is still not guessed
function lettersToGuess() {
  var i ;
  var toGuess = 0 ;
  for (i in progressWord) {
      if (progressWord[i] === "__")
          toGuess++;
  }
  return toGuess;
}

// These are the key events used to play and to document the letters already used and/or
// letters in the answers
document.onkeyup = function (event) {
  var letter = event.key;
  var lettersGuessed = letter.toLocaleUpperCase();
  var i;

  var positions = letterInWord(lettersGuessed);


  // This will alert correct and compare the letter guessed with the current word
  if (positions.length) {
      console.log("User has pressed a letter from word: " + letter);

      for (i = 0 ; i < positions.length; i++) {
          progressWord[positions[i]] = lettersGuessed;
      }

      // replace progress Word underscore with letter pressed
      document.getElementById("wordGuess").innerHTML = wordRandom.join(" ");
  } else {
      document.getElementById("lettersGuessed").innerHTML += lettersGuessed + " ";
  }}
