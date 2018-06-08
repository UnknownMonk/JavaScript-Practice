/**
 * Typeof will tell you if a data type is a object or not. But can not decifer if a array is a array. Instead use isArray method to find if a array is a array.
 * 
 * EXAMPLES
 */

 console.log(typeof null);
 console.log(typeof undefined);
 console.log(typeof {});
 console.log(typeof []);
 console.log(Array.isArray([]));
 console.log([] instanceof Array);