// https://www.youtube.com/watch?v=ZIw7QGVwaNI&ab_channel=TechWithTim

// const prompt = require("prompt-sync")()

// let wins = 0;
// let losses= 0;
// let ties = 0;

// while(true) {
// const playerChoice = prompt("Enter rock, paper of scissors (or q to quit): ");

// if(playerChoice.toLowerCase() === "q") {
//     break;
// }

// if(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice && "scissors") {
//     console.log(playerChoice + " is not a valid Choice. Please enter a valid choice");
//     continue;
// } 

// const choices = ["rock", "paper", "scissors"];
// const randomIndex = Math.round(Math.random() * 2);
// const computerChoice = choices[randomIndex]

// console.log("The Computer chose: ", computerChoice)

// if(computerChoice === playerChoice) {
//     console.log("Draw")
//     ties++;
// } else if((playerChoice === "paper" && computerChoice === "rock") ||
//          (playerChoice === "rock" && computerChoice === "scissors") ||
//          (playerChoice === "scissors" && computerChoice === "paper")) {
//     console.log("Won!");
//     wins++;
// } else {
//     console.log("Lost!");
//     losses++;
// }
// }


// console.log("Wins: ", wins, "Losses: ", losses, "Ties: ", ties)




class Game {
    constructor() {
   
    }

    randomIndex(){
        return Math.round(Math.random() * 2)
   }
   getPlayerChoice() {
        const choices = ["rock", "paper", "scissors"];

   }


}

class Player {

}





const game1 = new Game();
console.log(game1.randomIndex())

// var purchase1 = {
//     shoes: 100,
//     stateTax: 1.2,
    
//     totalPrice: function() {
//         // rather than having to think of the object the name of the object whose property is being tried to access, we can use alis of the current object name which is "this"  
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total Price: ', calculation)
//     }
// }

// purchase1.totalPrice();




// class Car {
//     // constructor function is used when instenciating new object: instence of a given class. 
//     constructor(color, speed, brand) {
    
//         this.color = color;
//         this.speed = speed;
//         this.brand = brand;
//     }
//     turnBoOn() {
//         console.log("turbo is on", this.brand)
//     }
// }

// const car1 = new Car("red", 120, "toyota")
// car1.turnBoOn();
