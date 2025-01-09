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
country.name = 'China'

// class fields
// Class fields in JavaScript are a concise and readable way to define properties directly within a class
class Sports{
  name='Soccer' //initial value
  getSport(){
    console.log('Todays sports is, ',this.name)
  }
  get name(){
    return this._name
  }
  set name(value){
    this._name = value
  }
}
const sports = new Sports();
sports.getSport()
sports.name = 'Cricket'
console.log(sports.name)
sports.getSport()

class Sports2{
  constructor(value){
    this.value = value;
  }
  getSport(){
    console.log('today sports ,',this.value)
  }
}

let sports2 = new Sports2('Basketball')
setTimeout(sports2.getSport.bind(sports2),2000)// one way to bind with sports
//second way using arrow function using getSport as a arrow function.an arrow function for the click method (click = () => {...}). Arrow functions have a unique property called lexical this. This means they capture the this value from their surrounding scope at the time of definition, not at the time of invocation


//setTimeout (and setInterval) are functions provided by the browser (or Node.js environment). They are designed to execute a function later, after a specified delay. However, when you pass a method directly to setTimeout
//setTimeout(sports2.getSport, 2000);
//What actually happens is that setTimeout receives a reference to the getSport function, not the method bound to the sports2 object. When the timer expires and getSport is finally executed by setTimeout, it is called as a regular function, not as a method of sports2