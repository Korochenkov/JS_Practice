
// 'use strict';


// 1. User inputs 2 numbers (via prompt). Show the sum of these numbers in alert
let operand1 = +prompt("Please input an operand #1");
let operand2 = +prompt("Please input an operand #2");
let answer = operand1 + operand2;
console.log(answer);


// 2. User inputs their full name. Show alert with welcome message.
let Name = prompt("Please enter your name");
alert(`Hello, ${Name}`);


// 3. User inputs a number. Show remainder of the division by 2.
let numForMod_2 = parseInt(prompt("Please input a number"));
console.log(`Remainder of the division by 2: ${numForMod_2 % 2}`);


// 4. User inputs a float number. Show value before dot and after dot.
let floatNum = parseFloat(prompt("Please input a number"));
console.log(`Integer part = ${Math.trunc(floatNum)}, fractional part = ${floatNum % 1}`);