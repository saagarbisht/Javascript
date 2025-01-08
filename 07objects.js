'use strict'
//figure brackets {…}
let obj = {
  name:'Ironman',
  age:33,
  job:'Super Hero',
};

obj.isMarrid = false;// adding new properties
obj.name = 'Black Panther';// changing a property
// dot notation to access value
console.log(obj.name);// accessing a value
delete obj.job;//deleting a property
obj['multi line key'] = 'its a multi word property'
//square bracket notation to access value
console.log(obj['multi line key'])

//Square brackets also provide a way to obtain the property name as the result of any expression 
let key = 'another multiword key'
obj[key] = 'strings'
console.log(obj[key])

//short hand
function user(name,age,job,){
  return {
    name,
    age,
    jobType:job,// both of them are possible in same object
    return:0,
    for:'me'
  }
  // same as
  // {
  //   name:name,
  //   age:age,
  //   job:job,
  // }
}
// and there is no limitation on property name they can be anything a reserved word start with number or symbol anything

console.log(user('gogo',33,'nothing'))

// in operator
console.log('name' in obj)//returns a boolean value if the property exist or not
//on the left side of in there must be a property name. That’s usually a quoted string.

// for in loop 
for(let prop in obj){
  console.log(prop , obj[prop]) // key is the property and obj[key] is value
}

// order

let numbs = {
  1:'one',
  4:'four',
  2:'two',
  5:'five',
  3:'three',
}
for(let num in numbs){
  console.log(num)//1,2,3,4,5 the order it appears (the order its in 1,4,2,5,3)
}

// if the property are interger like '23','11' not '+2' or '2.2'cuz its 2 and 2 in integer but the string and number from of the property has to be saem so 
console.log(Number('2.2'))//2
console.log(Number('+2'))//2

//if the property are integer then they will arragen in a accendig order and if they are anything besides integer then they will be in the order they were created

//object refrences and copying
let str1='String 1';
let str2 = str1;
str2 += ' and String 2';// it will only change the value of str2 not str1 cuz str2 hold a copy of str1 not its reference
console.log(str1)
console.log(str2) 

// but for object it's different
let obj1 = {name:'gogo',age:33};
let obj2 = obj1;
obj2.name = 'lolo';
console.log(obj1.name)// lolo cuz obj2 holds the refrence of the value where it's stored
//A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
console.log(obj1 === obj2)//true they have the same refrence
//but if
obj2 = {name:'lolo',age:33}
console.log(obj1 === obj2)//false they have the different refrence

//An important side effect of storing objects as references is that an object declared as const can be modified.
const user2 = {
  name : 'Jordan',
}
user2.name = 'John'
console.log(user2) // John

//cloning and merging

//cloning
let obj3 = Object.assign({},obj1)
console.log(obj3 === obj1)//false as obj3 dont have a refrence of obj1 but here we create a entirely new object with the values of obj1
console.log(obj3)

//nested cloning
let clone = {
  name:'John Wick',
  wepons:{
    guns:3,
    granades:3,
    kifes:5,
    other:3,
  }
}
// shallow copy
let clone2 = Object.assign({},clone)

//but the wepons itself is an object whcih is also a refrence type so now if we make any change in clone2 wepon it will reflect in orignal like this

delete clone2.wepons.guns
console.log(clone)// no guns here cuz wepons is an object and will bw copied by refrence

// “deep cloning” or “structured cloning

let clone3 = structuredClone(clone)
clone3.wepons.guns = 10;
console.log(clone.wepons)// no guns 
console.log(clone3.wepons) // guns:10; cuz now its not a refrence copy 
//he structuredClone method can clone most data types, such as objects, arrays, primitive values. 

// deep clone function
const deepClone = (obj) => {
  if(typeof obj !== 'object' || obj === null){
      return obj;
    } 
  const newObj = Array.isArray(obj) ? [] : {};
  for(key in obj) {
    const value = obj[key];
    newObj[key] = deepClone(value);
  }
  return newObj; 
}

const employee = {
  name : 'John',
  jobTitle : 'Web Developer',
  salary:20000,
  timing:'9 to 5',
  skills:['Front-end', 'Back-end', 'Dev-ops'],
  favorites:{
    movies:['x','y','z'],
    anime:['x','y','z'],
  }
}

const employeeShallowCopy = {...employee}
employeeShallowCopy.skills.push('Data base engineer');
console.log(employee.skills === employeeShallowCopy.skills)// ture
console.log(employee.skills)// data base engineer is also added to the orignal skills as it was copied as a refrence;
const employeeDeepCopy = deepClone(employee);
employeeDeepCopy.skills = [];
console.log(employee.skills === employeeDeepCopy.skills)// ture
console.log(employeeDeepCopy.skills) // []
console.log(employee.skills)//   skills:['Front-end', 'Back-end', 'Dev-ops, 'Data base engineer'],

// circular references, when an object property references the object itself (directly or via a chain or references).
let newAnime = {
  'lolo' :'lolo'
};
newAnime.gogo = newAnime;
console.log(newAnime)

let newAnimeClone = newAnime
console.log(newAnime)
//Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value

//A function that is a property of an object is called its method. It can be used in any function, even if it’s not a method of an object.
let dog = {name:'Alexa'};
let cat = {name:'Siri'};

function sound(){
  console.log(this.name)
}

dog.f = sound;
cat.f = sound;

dog.f()
cat.f()

function standaloneThis(){
  console.log(this)
}
standaloneThis()// undefined

//this is undefined in strict mode. In non-strict mode the value of this in such case will be the global object (window in a browser)

//Arrow functions are special: they don’t have their “own” this.

const usingArraowFunctionWithThis = () => {
  console.log(this.name)
}
dog.a = usingArraowFunctionWithThis;
dog.a()

// constructor and new operator

function Animal(name,type){
  this.name = name;
  this.type = type;
  console.log(new.target)
  this.sayHi = function(){
    console.log(`hi my name is ${this.name} and i am a ${this.type}`)
  }
}

let horse = new Animal('bixby','horse')
horse.sayHi()
/*
When a function is executed with new, it does the following steps:

A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.
in the above constructor function this happens 
function Animal(name,type){
  this = {};// implicitly
  this.name = name;
  this.type = type;
  this.sayHi = function(){
    console//
  }
    return this; // implicitly
}
    and when we call it with the new key word it's the same as
    let horse = {
    name : 'bixby',
    type:'horse',
    sayHi:(){
      console//
    }
    }
*/

//if there is a return statement,in constructors then 
// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.

// optional chaining
let changing = {
  greet(){
    console.log('hello')
  }
}
// console.log(changing.name.firstname) // throw error cuz chaining.name is undefine and undefine.firstname can't be done it will throw an type error
// but what we want is undefine if the property does't exist so here we use optional chaining there are other ways as ifelse, &&, || ,ternary but every one is more verbose than the last one and hinders the code readability so will use optional chaining
console.log(changing?.name?.firstname) // first it checks if changing exist if not retuns undefined else goes further and cheeck if name exist in changing if not the returns undefine else goes futher and so on

//The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

changing.greet?.()
// changing?.sayHi() this will give error as it first try to call sayhi but it does't exist and then throw error so to chain function we put our special syntax right before parenthesis;

// changing?.name = 'john'// invalid left hand assignment; We can use ?. for safe reading and deleting, but not writing
// console.log(changing)

// by specification only two primitive types may serve as object property keys string type or symbol type and other will autoconvert to string like 1 to '1' or true to 'true';
let O = {toJSON : () => ({hello:'hello world!'})}
const jsonFormat = JSON.stringify({hello:'hello world!'})
const jsonFormat2 = JSON.stringify(O)
console.log(jsonFormat) 
console.log(jsonFormat2) 

// Primitive symbol
//Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. 
let id = Symbol('id')
let customer = {
  name :'user 1',
  [id] : '123abc',
}
console.log(customer[id])

// object to primitive conversion
// all objects are true in boolean context so there exist only number and string conversion
const con1 = {name:'naina'};
const con2 = {name:'sagar'};
console.log(con1+con2);//[object Object][object Object] // NaN in browser
console.log(con1-con2);//NaN
console.log(con1*con2);//NaN
console.log(con1/con2);//NaN
console.log(con1 + 33);//[object Object]33 // 33 in browser
//When you add an object to a number or string in JavaScript, the object is automatically converted to its primitive value using the valueOf() method before the addition, which in most cases results in the object being converted to a string representation, leading to a string concatenation in Node.js, while in a browser, due to the way the operation is optimized, it might sometimes attempt a numeric conversion first, resulting in a numeric value.
let objconverse = {
  name:'John',
  money:1000,
  [Symbol.toPrimitive](hint){
    console.log(hint)
    return hint === 'string' ? this.name : this.money
  }
}
console.log(String(objconverse))
console.log(+objconverse)

// another way
let objconverseway2 = {
  name:'Karen',
  money:3000,
  toString(){
    return this.name;
  },
  valueOf(){
    return this.money
  }
}

console.log(+objconverseway2)
console.log((objconverseway2))

// Object.keys,values,entries

const keysForObjconverseway2 = Object.keys(objconverseway2)
console.log(keysForObjconverseway2)
const valueForObjconverseway2 = Object.values(objconverseway2)
console.log(valueForObjconverseway2)
const entriesForObjconverseway2 = Object.entries(objconverseway2)
console.log(entriesForObjconverseway2)


//Object.keys/values/entries ignore symbolic properties

// Just like a for..in loop, these methods ignore properties that use Symbol(...) as keys. Usually that’s convenient. But if we want symbolic keys too, then there’s a separate method Object.getOwnPropertySymbols that returns an array of only symbolic keys. Also, there exist a method Reflect.ownKeys(obj) that returns all keys.

