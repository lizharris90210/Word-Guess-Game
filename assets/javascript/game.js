
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
(wordRandom.length - "_");

// Stored guesses
var guesses= [];
document.getElementById(lettersAndDashes);
guesses.innerHTML= lettersAndDashes;
console.log(guesses);

// GET ELEMENTS
var winsNumber = document.getElementById("winsNumber");
winsNumber.innerHTML= 0;
var losses = document.getElementById("losses");
lossesNumber.innerHTML= 0;
remainingLetters.innerHTML= wordRandom.join;
var lettersGuessed = document.getElementById("lettersGuessed");
lettersGuessed.innerHTML= answerArray;
//**************GAME LOOP****************//

document.onkeypress = function myFunction() {
    var x = document.getElementById("instructions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }}

//letters left to be guessed and alert progress
while (remainingLetters > 0) {
   document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
   alert(answerArray.join(" "));
}



// // Guesses ul
//     result = function (guesses) {
//       wordHolder = document.getElementById('lettersAndDashes').innerHTML= "lettersAndDashes";
  
//       for (var j = 0; j < wordRandom.length; j++) {
//         correct.setAttribute('id', 'my-word');
//         guess = document.createElement('li');
//         guess.setAttribute('class', 'guess');
//         if (wordRandom[j] === "-") {
//           guess.innerHTML = "-";
//           space = 1;
//         } else {
//           guess.innerHTML = "_";
//         }
  
//         guesses.push(guess);
//         wordHolder.appendChild(correct);
//         correct.appendChild(guess);
//       }
//     }
// Correct guess wins!
for (var k = 0; k < guesses.length; k++) {
   if (counter + space === guesses.length) {
     guesses.innerHTML = "You win!"
   }}
//****************END GAME LOOP**********//


// OnClick Function
check = function () {
   list.onkeypress= function () {
     var guess = (this.innerHTML);
     this.setAttribute("class", "active");
     this.onkeypress = null;
     for (var l = 0; l < wordRandom.length; l++) {
       if (wordRandom[l] === guess) {
         guesses[l].innerHTML = guess;
         counter += 1;
       } 
     }
     var k = (wordRandom.indexOf(guess));
     if (k === -1) {
       winsNumber -= 1;
     } else {
       comments();
     }
   }
 }
//  Replace word with dashes
 wordRandom = wordRandom.replace(/\s/g, "-");

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
  var toGess = 0 ;
  for (i in progressWord) {
      if (progressWord[i] === "__")
          toGess++;
  }
  return toGess;
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
      // alert("WRONG!");
      document.getElementById("lettersGuessed").innerHTML += lettersGuessed + " ";
  }}
