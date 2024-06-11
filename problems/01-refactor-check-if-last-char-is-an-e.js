/*
Refactor checkIfLastCharIsAnE

Refactor the function `checkIfLastCharIsAnE` to have only one line of code in
the function code block instead of three lines of code.
*/

// 1. Define a function with the name `checkIfLastCharIsAnE`.
// 2. Define a single parameter for the function called `str`.
function checkIfLastCharIsAnE(str) {    //Funtion has been defined with two parameters.
    // 3. Find the last character of `str`.
    //let lastChar = str[str.length - 1]; lastChar = lastChar.toLowerCase(); 
    return str[str.length - 1].toLowerCase() === 'e'; //function has been coded in one line.
}

// console.log(checkIfLastCharIsAnE('stance')); //=> true
// console.log(checkIfLastCharIsAnE('FLOAT'));  //=> false
// console.log(checkIfLastCharIsAnE('PHONE'));  //=> true



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = checkIfLastCharIsAnE;
