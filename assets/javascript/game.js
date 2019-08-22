//Pick word
function getItem(words) {

//Words
var words = ['magic', 'broom', 'spell', 'charm', 'wand'];
document.getElementById("wordGuess").innerHTML = words[Math.floor(Math.random() * words.length)];
}
//Answer
var answerArray = [];
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}
var remainingLetters = word.length;

//Loop
while (remainingLetters > 0) {
    
//Progress
alert(answerArray.join(" "));

//Take input from the player
var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
break;
} 
else if (guess.length !== 1) {
 alert("Please enter a single letter.");
} else {
// Update the game state with the guess
for (var j = 0; j < word.length; j++) {
if (word[j] === guess) {
answerArray[j] = guess;
remainingLetters--;
}
}
}
// Update answerArray and remainingLetters for every correct guess
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
    
   }

