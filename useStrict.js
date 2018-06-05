// Q: What is use strict in a javascript file.
// A: Enforces stricter parsing and error handling in your code.
// Use strict allows us to fail fast & fail loudly.
// 1. Prevents the use of global variables.



// example 1
 
'use strict';
 
city = 'London';
 
console.log(city);
 
 
 
 
// example 2
 
'use strict';
 
function myFunc(a, a, b) {
    console.log(a, a, b);
}
 
myFunc(1, 2, 3);
 
 
 
 
// example 3
 
'use strict';
 
delete Object.prototype;