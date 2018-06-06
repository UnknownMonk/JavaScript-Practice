// Reference and data also copying array with out referencing the other array.


const list1 = [1,2,3,4,5];
const list2 = list1;

list1.push(6,7,8);

console.log(list2);


const list1 = [1, 2, 3, 4, 5];
const list2 = list1.slice();

list1.push(6, 7, 8);

console.log(list2);
console.log(list1);