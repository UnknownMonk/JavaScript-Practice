function myFunk() {
  let count = 0;

  return function(){
    count++;
    return count;
  };
}

console.log(myFunk());

const instanceOne = myFunk();
const instanceTwo = myFunk();

console.log("instanceOne", instanceOne());
console.log("instanceOne", instanceOne());
console.log("instanceOne", instanceOne());
console.log("instanceTwo", instanceTwo());
console.log("instanceTwo", instanceTwo());
console.log("instanceTwo", instanceTwo());