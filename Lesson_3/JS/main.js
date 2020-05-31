
'use strict';


// 1. User inputs a number. Check the number and write a message if it's odd or even.
let num = parseInt(prompt("Please input a number"));

if (num & 1) {
    console.log(`The number is odd`);
} else {
    console.log(`The number is even`);
}


// 2. Check the range outside.
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it
let age = parseInt(prompt("Please input an age"));
if (!(age >= 14 && age <= 90)) {
    console.log(true);
};
age = parseInt(prompt("Please input an age"));
if (age < 14 || age > 90) {
    console.log(true);
}

// 3. Write to console number sequence (0, 2, 4, 6, 8, 10):
let evenStr = '0';
for (let i = 2; i < 11; i = i + 2) {
    evenStr = evenStr + `, ${i}`;
}
console.log(evenStr);


// 4. Write to console number sequence (1, 3, 5, 7, 9):
let oddStr = '1';
for (let i = 3; i < 10; i = i + 2) {
    oddStr = oddStr + `, ${i}`;
}
console.log(oddStr);




// 5. Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
let login = ''
let password = '';

login = prompt("Who's there?");

if (login === "Admin") {

    password = prompt("Password?");

    if (password === 'TheMaster') {

        alert("Welcome!");

    } else if (password === null) {

        alert("Canceled");

    } else {

        alert("Wrong password");
    }

} else if (login === null) {

    alert("Canceled");

} else {

    alert("I don't know you");
}