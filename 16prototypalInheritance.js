//In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”: When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”

//The property [[Prototype]] is internal and hidden, but there are many ways to set it(__proto__)
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
  walk() {
    console.log("animal is walking");
  },
};
rabbit.__proto__ = animal;
console.log(rabbit.eats);
console.log(rabbit.jumps);
//Then, when alert tries to read property rabbit.eats , it’s not in rabbit, so JavaScript follows the [[Prototype]] reference and finds it in animal (look from the bottom up):
//if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”

let dog = {
  sound: "bow bow",
  __proto__: rabbit,
};
// animal.__proto__ = dog // TypeError: Cyclic __proto__ value
console.log(dog.eats);
dog.walk();
//The method is automatically taken from the prototype
// the read goes like we ask for dog.eats js looks for eats in dog obj if found returns the result else goes one step above in prototypal chain in rabbit looks there if finds returns result else goes even deeper reaches to animal find and retuns result if eats doesn't exist there then it returns undefined.

//limitations.
// 1. The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// 2.The value of __proto__ can be either an object or null. Other types are ignored.

// __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]

//The prototype is only used for reading properties. Write/delete operations work directly with the object.

let ghost = {
  haunt: true,
  kills() {
    console.log(
      "the ghost had killed 12 people till now and will not stop until..."
    );
  },
};

let supernatural = {
  __proto__: ghost,
};
supernatural.kills = () => {
  console.log("the ghost hasn't killed anyone and is incocent");
};

supernatural.kills();
/*
the kills of ghost objet is not changed just supernatural got its own kills function when called the js finds the function in supernatural object and dont have to go any deeper.(for ghost object) the ghost kills still exist in ghost object 
*/
ghost.kills();

// accessor properties are an exception as assigment is handled by setter function and

let creator = {
  name: "Sam",
  surname: "Winstom",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  isAdmin: true,
  __proto__: creator,
};

// now

console.log(admin.fullName); // sam winston how js got the value
/*
the property does't exist in admin so it got it from user but its a getter function which require name and surname proerty which admin dont have so it got them from creator name:sam, surname:winston if it had the name and surname property js wont be searching for them in user.

now let set them
*/

admin.fullName = "John Wick";
// the fullName is a setter function which on calling call the setter in the user and set the name and surname propety to the value but the this in the setter is the current context which is admin where these property dont exist so first it creates admin.name :John, admin.surname:Wick and then on getter it get the new value from the admin.name and admin.surname

console.log(admin.fullName);
console.log(creator.fullName);
// on the creator.fullName the this or current context is the creator and there name is :same and surname is : winston so we get the result sam winston

//value of this
//No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot. methods are shared, but the object state is not.

// for...in loop
//The for..in loop iterates over inherited properties too.
for (let key in admin) {
  let ownProperty = admin.hasOwnProperty(key);
  if (ownProperty) {
    console.log(key, ":", admin[key], "Own Property");
  } else {
    console.log(key, ":", admin[key], "Inherited property");
  }
}
//here’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key
// Object.hasOwnProperty is inherited cuz we didn't create it and still can use but …But why does hasOwnProperty not appear in the for..in loop like eats and jumps do, if for..in lists inherited properties?it’s not enumerable. Just like all other properties of Object.prototype, it has enumerable:false flag. And for..in only lists enumerable properties. That’s why it and the rest of the Object.prototype properties are not listed.

//Almost all other key/value-getting methods, such as Object.keys, Object.values and so on ignore inherited properties.

//new objects can be created with a constructor function, like new F().
function F(name) {
  this.name = name;
}
//If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.
const f = new F("Sam");
console.log(f);
//F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object. If, after the creation, F.prototype property changes (F.prototype = <another object>), then new objects created by new F will have another object as [[Prototype]], but already existing objects keep the old one.
//The default "prototype" is an object with the only property constructor that points back to the function itself.
console.log(f.constructor === F); //true

//Native prototypes
//The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor functions use it.

let obj = {};
// alert(obj)// alert is a browser based function and the output in browser will be "[Object Object]"
console.log(obj.toString()); // we have to explicitly do the toSting here but wiht alert it is done implicitly .

// now the question arisis Where’s the code that generates the string "[object Object]"? That’s a built-in toString method, but where is it? The obj is empty! …But the short notation obj = {} is the same as obj = new Object(), where Object is a built-in object constructor function, with its own prototype referencing a huge object with toString and other methods. and thats how we also get to use different methods and properties,Other built-in objects such as Array, Date, Function and others also keep methods in prototypes.

// to check if the prototypes are inherited from Object.prototype
console.log(obj.__proto__ === Object.prototype); // true

// just like with the obj when we declare it with the literal {} internally the new Object constructor is called and all the prototype is passed down other build in object does the same take an example of array if we declare the array [1,2,3,4] internally it will go something like this new Array(values) and Array.prototype becomes its prototype and provides methods

//all of the built-in prototypes have Object.prototype on the top. That’s why some people say that “everything inherits from objects”.or everything in js is an object and on some ground it is kindof correct

//null and undefined are the only exceptions. They do not have prototypes and do not inherit from Object.prototype.

//all of the built-in prototypes have Object.prototype on the top. example
let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true array prototype
// but what if we go on step above
console.log(arr.__proto__.__proto__ === Object.prototype); // true  object prototype
// and above this will be null that the last
console.log(arr.__proto__.__proto__.__proto__ === null); // true

// there are some prototypes methos that overlaps for array its includes and includes for string to but both are different for array it checks each element in the array and for string it check for each character in the string and there are several other methods (like toString : Array has its own object has its own and even string has its own each work differently and if any constrctor dont have this method they go level up to find in prototypal chain)

// function are objects of a built-in Function constructor, and their methods (call/apply and others) are taken from Function.prototype. Functions have their own toString too.

//primitive are not objects. But if we try to access their properties, temporary wrapper objects are created using built-in constructors String, Number and Boolean. They provide the methods and disappear. Methods of these objects also reside in prototypes, available as String.prototype, Number.prototype and Boolean.prototype. Special values null and undefined stand apart. They have no object wrappers, so methods and properties are not available for them. And there are no corresponding prototypes either.

//Borrowing from prototypes
//if we’re making an array-like object, we may want to copy some Array methods to it.
let arrObj = {
  0: "Hello",
  1: "world!",
  length: 2,
};
arrObj.join = Array.prototype.join;
//It works because the internal algorithm of the built-in join method only cares about the correct indexes and the length property. It doesn’t check if the object is indeed an array. Many built-in methods are like that.
console.log(arrObj.join(", "));
//Borrowing methods is flexible, it allows to mix functionalities from different objects if needed

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function foo(a, b) {
  console.log(a + b);
}

foo.defer(1000)(1, 2);

//  prototye methods, without __proto__
/*
The modern methods to get/set a prototype are:
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
*/

// Setting or reading the prototype with obj.__proto__ is considered outdated and somewhat deprecated. The only usage of __proto__, that’s not frowned upon, is as a property when creating a new object: { __proto__: ... }

// there is a special method for that to
// Object.create(proto)// proto:The object which should be the prototype of the newly-created object.,second argument: property descriptors.

let chef = {
  cook: true,
};
let pastryChef = {
  likeSweets : true,
}

Object.setPrototypeOf(chef,pastryChef)

let sushiChef = Object.create(chef, {
  name: { value: "John", enumerable: true, configurable: true },
  age: { value: 30, configurable: true, enumerable: true },
  cuisine:{value:'East Asian'}
});

console.log(sushiChef.likeSweets);

//We can use Object.create to perform an object cloning more powerful than copying properties in for..in:
let clone = Object.create(Object.getPrototypeOf(sushiChef),Object.getOwnPropertyDescriptors(sushiChef))
console.log(clone.likeSweets)// proto of chef
console.log(clone.cook)// proto of sushi chef
console.log(clone.cuisine)// nonenumerable descriptor

//dictionary objects : In JavaScript, objects created with a null prototype are often referred to as "null-prototype objects" or "dictionary objects". they are even simpler than the regular plain object {...}.