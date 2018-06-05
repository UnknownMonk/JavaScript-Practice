//Curry this function.

function getProduct(num1){
  return function(num2){
    return num1 + num2;
  }
}

console.log(getProduct(10)(20));
 


