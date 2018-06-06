const car1 = {
  brand: "Porsche",
  getCarDescription: function(cost,year, color){
    console.log(`This car is a ${this.brand}. The Price is $${cost}. The year is ${year}. This color is ${color}. \n`);
  }
}
const car2 = {
  brand: 'Lamborghini'
};

const car3 = {
  brand: 'Lambo'
};


car1.getCarDescription(80000, 2010, 'blue');
car1.getCarDescription.call(car2, 80000, 2019, "red");

car1.getCarDescription.apply(car3,[35000, 2012, "black"]);