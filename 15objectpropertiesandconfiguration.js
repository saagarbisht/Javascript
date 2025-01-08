// "use strict"
// until now a property of an object was a simple “key-value” pair to us. But an object property is actually a more flexible and powerful thing.

/*
Property flags
Object properties, besides a value, have three special attributes (so-called “flags”):
1. writable – if true, the value can be changed, otherwise it’s read-only.
2. enumerable – if true, then listed in loops, otherwise not listed.
3. configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

In non-strict mode, no errors occur when writing to non-writable properties and such. But the operation still won’t succeed. Flag-violating actions are just silently ignored in non-strict.

We didn’t see them yet, because generally they do not show up. When we create a property “the usual way”, all of them are true. But we also can change them anytime.
*/

let obj = {
  name:'John'
}

//to get those attributes
let descriptor = Object.getOwnPropertyDescriptor(obj,"name")
console.log(descriptor)//{ value: 'John', writable: true, enumerable: true, configurable: true}
//to change those attribute

Object.defineProperty(obj,"name",{writable: false})//If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags

obj.name = 'Jack'// can’t be reassigned(writable : false) unless  applied their own defineProperty to override ours.

Object.defineProperty(obj,"age",{value:23,writable:true,enumerable:true,configurable:true})//If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags. if a flag is not supplied, it is assumed false so we have to explicitly supply the flags

Object.defineProperty(obj,"isOnline",{value:true})// by default all flags created with definProperty are false

console.log(obj)// isOnline property will not show as enumerable is false by default to see the property we have to explicitly supply the true flag just like the age property
//Non-enumerable properties are also excluded from Object.keys but we can access the values easily they are just not visible use cases (a built-in toString for objects is non-enumerable, it does not show up in for..in. But if we add a toString of our own, then by default it shows up, if we don’t like it, then we can set enumerable:false. Then it won’t appear)
console.log(obj.isOnline)// false the property is not visible but can easily be accessed

// each and every property of object in js has these attributes be it a build in or custome made object

//non configurable (The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.)
let piDescriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(piDescriptor) 
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
//There’s absolutely nothing we can do with Math.PI. Making a property non-configurable is a one-way road. We cannot change it back with defineProperty
//configurable: false prevents changes of property flags and its deletion, while allowing to change its value. If writable is true, you can change it to false (making the property read-only), but you cannot change it back to true. If writable is already false, you cannot change it.

// method to define many propertis at once

Object.defineProperties(obj,{
  'name':{value:'Jack',writable:false},
  'age':{value:40,writable:false}
})
console.log(obj)

//propert way to copy all descriptors of an object 
let clone = Object.defineProperties({},Object.getOwnPropertyDescriptors(obj));
let clone2 = Object.assign({},obj)
console.log(clone.isOnline)
clone.age = 12;
console.log(clone.age)//retains all the descriptior that's why it wont change the age (age {writable :false})
clone2.age = 21;
console.log(clone2.age)// does not retain the descriptors

//Sealing an object globally
// when we talk about the descriptors they work on individual properties. but there are methods that works on the whole object

Object.preventExtensions(clone2)//Forbids the addition of new properties to the object.
clone2.name = 'Alex'// we can modify/remove the existing properties but cant add new ones 
console.log(clone2)

Object.seal(clone2)//Forbids adding/removing of properties. Sets configurable: false for all existing properties.
clone2.age=455;// we ca still modify the existing properties
console.log(clone2)

Object.freeze(clone2)//Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
clone2.name = 'Tom' // now we can't even modify the existing properties
console.log(clone2)

//these for these properties
console.log(Object.isExtensible(obj))
console.log(Object.isSealed(clone2))
console.log(Object.isFrozen(clone2))
/*
There are two kinds of object properties.
The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.
The second type of property is something new. It’s an accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.
*/

//Getters and Setters
//Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set

let student = {
  name:'John',
  surname:'Smith',
  age:24,
  get fullName(){
      return this.name + " " +this.surname
  },
  set fullName(value){
    [this.name,this.surname] = value.split(' ');
  }
}
console.log(student.fullName)// We don’t call student.fullName as a function, we read it normally: the getter runs behind the scenes.
student.fullName = "Tom Holland";//setter
console.log(student.fullName)
//we have a “virtual” property fullName. It is readable and writable.

//Accessor descriptors
// For accessor properties, there is no value or writable, but instead there are get and set functions

const accessorDescroptor = Object.getOwnPropertyDescriptor(student,'fullName')
console.log(accessorDescroptor)
/*
{
  get: a function without arguments, that works when a property is read,,
  set: a function with one argument, that is called when the property is set,,
  enumerable: true,
  configurable: true
}
*/

//creating an accessor with defineProperty
Object.defineProperty(student,'detail',{
  get(){
    return `hello my name is ${this.name} ${this.surname} and i am ${this.age} years old`
  },
  set(value){
    this.age = value;
  },
  enumerable:true,//false by default
  configurable:true,//false by default
})

console.log(student)

//a property can be either an accessor (has get/set methods) or a data property (has a value), not both

let players = {
  get name(){
    return this._name;
  },
  set name(value){
    this._name = value;
  }
}
players.name = 'Jack'
console.log(players.name)
//the name is stored in _name property, and the access is done via getter and setter.

// using for conpatiblitiy