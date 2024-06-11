/*
Commenting Someone Else's Code

Replace variables using the example input in code comments. Then fix the bug
in the code so that the example input matches the expected output.
*/

function charactersNotQuiteAtTheEdge(str) { //Funtion has been decalred with a parameter named str.
  let char1 = str[1]; //Char1 has been declared a variable and assigned a value of str with an index of 1.
  let char2 = str[str.length - 2];  //Char2 has been declared a variable and assigned a value of str with a dot length - 1 method.
  return char1 + char2; //Char1 and Char2 have been added together and returned.
}

console.log(charactersNotQuiteAtTheEdge('fringe')); // expected output: 'rg'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = charactersNotQuiteAtTheEdge;
