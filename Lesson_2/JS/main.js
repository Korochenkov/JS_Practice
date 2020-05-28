
// 'use strict';


let oper1 = +prompt("Please input an operand #1");
let oper2 = +prompt("Please input an operand #2");
let answer = oper1 + oper2;
console.log(answer);



let Name = prompt("Please enter your name");
alert(`Hello, ${Name}`);

let numForMod_2 = parseInt(prompt("Please input a number"));
console.log(`Remainder of the division by 2: ${numForMod_2 % 2}`);

let numForMod_2 = parseFloat(prompt("Please input a number"));
console.log(`Inteder part = ${Math.trunc(numForMod_2)}, fractional part = ${numForMod_2 % 1}`);