function User(firstName, lastName,age,gender){
  this.firstName = firstName;
  this.lastName  = lastName;
  this.age       = age;
  this.gender    = gender
}

let user1 = new User("Bobby","Axe",12,"unknown");
console.log(user1);

let user200 = new User('Jill', 'Roberson', 25, 'trans');
console.log(user200);

