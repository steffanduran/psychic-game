var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessedLetter = [];
// my attempt to not count a "non-alpha" key
// var alpha = "[ A-Za-z]";

// function something() {
//     //code inside
// }

// something();

document.onkeyup = function(event) {
    var userGuess = event.key;

    var alreadyGuessed = guessedLetter.indexOf(userGuess);
    console.log(userGuess);
    console.log(computerGuess);
    console.log(guessedLetter);
    console.log("already guessed" + alreadyGuessed);



    if (userGuess === computerGuess) {
        wins++;
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeft = 9;
        guessedLetter = [];
    } else if ((alreadyGuessed == "-1") && userGuess !== computerGuess) {
        guessesLeft = guessesLeft - 1;
        guessedLetter.push(userGuess);
    }

    if (guessesLeft === 0) {
        losses++;
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeft = 9;
        guessedLetter = [];

        // my attempt to not count a "non-alpha" key
        // if (userGuess !== alpha) {
        //     alert("not a letter");
        // }

    }

    var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>User Guess: " + guessedLetter + "</p>";

    document.querySelector('#game').innerHTML = html;
}