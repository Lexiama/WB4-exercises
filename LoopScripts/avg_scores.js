"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

let myTotal = 0; 
let yourTotal = 0;

for (let i = 0; i < myScores.length; i++) {
    myTotal += myScores[i];
}

for (let i = 0; i < yourScores.length; i++) {
    yourTotal += yourScores[i];
}           

console.log("My average score is " + myTotal / myScores.length);
console.log("Your average score is " + yourTotal / yourScores.length);
