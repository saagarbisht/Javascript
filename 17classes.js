//In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).

class MyClass{
  constructor(){}
  method1(){}
  methos2(){}
}
//The constructor() method is called automatically by new, so we can initialize the object there.
//In JavaScript, a class is a kind of function.
class User{
  constructor(name){
    this.name=name;
  }
  sayHi(){
    console.log('Hello,',this.name)
  }
}
console.log(typeof User)//function
console.log(Object.getOwnPropertyNames(User.prototype))// constructor and methods
const user1 = new User('Jack')
user1.sayHi()//Stores class methods, such as sayHi, in User.prototype. when we call its method, it’s taken from the prototype
// and just like user1 we can create as much of classes as we want but what happen when we call the User class with new keyword
/*
When new User("Jack") is called:
A new object is created.
The constructor runs with the given argument and assigns it to this.name.
then we can call object methods, such as user.sayHi().
*/

// class is a “syntactic sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new), because we could actually declare the same thing using constructor function and adding method to that functions prototype (but its not entirely the same there are some differences)

//First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true
//Second, unlike a regular function, it must be called with new:
//Third, Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
//Fourth, Classes always use strict. All code inside the class construct is automatically in strict mode.

// Class Expression
//Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.
let Student = class{}// class expression
let Customer = class Admin{}// named class expression(the name is visible inside the class only)

//'on-demand' class
function makeClass(phrase){
  return class {
    sayHi(){
      console.log(phrase)
    }
  }
}
let Admin = makeClass('I am admin')
new Admin().sayHi()

//Getters/Setters
class Country{
  constructor(name){
    this.name = name
  }
  get name(){
    return this._name;
  }
  set name(value){
    this._name = value;
  }
}
let country = new Country('India')
console.log(country._name)