
//

var x = 10;

function y() {
  x = 100;
  return;
  function x() {}
}

y();

console.log(x);
// 10 because of hoisting