
const prompt = require("prompt-sync")()

const target = 10 + Math.round(Math.random() * 90);
console.log(target)
let guesses = 0;

while(true) {
    guesses++;
    const guess = Number(prompt("Guess the number (0-100): "));
    if(guess > target) {
        console.log("Your guess is too high.")
    } else if(guess < target) {
        console.log("Your guess is too low")
    } else {
        console.log("Your guess is correct.")
        // immediatly exits the closest internal loop
        break;
        // immediatley restarts the loop
        // continue
    }
}

console.log("You guess the number in: ", guesses)