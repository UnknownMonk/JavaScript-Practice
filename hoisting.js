
/**
 *Variable hoisting and function hoisting occurs is when a variable or function is declared. A variable will will be hoisted to the top of the file by the javascript inturputer with out the varable value attached to it. A function decleration will be hoisted in it's entierty but a function expression will only hoist the variable to the top of the file. 
 * 
 * 
 */






console.log(color);

var color = "blue";

console.log(color);

//tab 2

var color;

console.log(color);

color = "blue";

console.log(color);

// tab 3

console.log(getProduct(2, 3));

var getProduct = function(num1, num2) {
  return num1 * num2;
};

console.log(getProduct(2, 3));





