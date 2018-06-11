const a = {};
const b = { name: "b" };
const c = { name: "c" };

a[b] = 200;
a[c] = 400;

console.log(a[b]);
