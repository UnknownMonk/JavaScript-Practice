/** 
 * The this key word refers to the object it is in the context of.
 * 
 * 
 * 
 * 
*/





var house = {
  price: 100000,
  squareFeet: 2000,
  owner: "Taylor",
  getPricePerSquareFoot: function(){
    return house.price / house.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());