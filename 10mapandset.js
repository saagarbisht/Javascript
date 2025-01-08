// Mpa and Set 
// Objects are used for storing keyed collections. Arrays are used for storing ordered collections.

// these are not enough for real life. Thats why Map and Set also exist.

// Map : Map is a collection of keyed data items, just like an Object. But the main difference is the Map allows keyed of any type.

/*
  methods and properties : 
*/
let map = new Map();

map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');

console.log(map)
console.log(map.size)
console.log(map.get(1))// num1

let john = {name:'John'};
let visitsCountMap = new Map();
visitsCountMap.set(john,123);
console.log(visitsCountMap.get({name:'John'}));

let jane = {name:'Jane'};
let kia = {name:'Kia'};
visitsObj = {}
visitsObj[jane] = 123;
visitsObj[kia] = 456;
console.log(visitsObj['[object Object]'])//  456 ; every thing as a key gets converted to string in objects even objects 

// in map NaN is considered equal to NaN. So NaN can be used as the key as well.
//Every map.set call returns the map itself, so we can “chain” the calls

//iteration over map

let recipeMap = new Map([
  ['cucumber',500],
  ['tomatoes',350],
  ['onion',50],
])

for(let vegetable of recipeMap.keys()){
  console.log(vegetable)
}

for (let price of recipeMap.values()){
  console.log(price)
}

for (let [vegetable,price] of recipeMap){
  console.log(vegetable,' => ',price)
}

//The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object. (objects )

// besides the above iterations there is build in forEach for map just like an Array

recipeMap.forEach((value,key,map) => {
  console.log(key,' : ',value)
})

// creating map from object
let obj = {
  name:'John',
  age:30,
  isOnline:false,
} 
let userMap = new Map(Object.entries(obj))
console.log(userMap)

// now for the vice versa 
let userObj = Object.fromEntries(userMap)
console.log(userObj)

// set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
//For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once. Set is just the right thing for that:

let set = new Set();
let pete = {name:'Pete'};
let mary = {name:'Mary'};

set.add(john);
set.add(pete);
set.add(pete);
set.add(pete);
set.add(mary);
set.add(mary);
set.add(john);

console.log(set.size);// repeted numbers are not added
for(let user of set){
  console.log(user.name)
}

// set iteration

let fruitSet = new Set(['orange','apples','banaanas']);
for (let fruit of fruitSet){
  console.log(fruit)
}

set.forEach((value,valueAgain,set) => {
  // console.log(value, valueAgain)
})

console.log(fruitSet.keys())
console.log(fruitSet.values())
console.log(set.entries())

// weakmap and weakset
//The first difference between Map and WeakMap is that keys must be objects, not primitive values:

let weakMap = new WeakMap();
let testObj = {test:'fail'};
weakMap.set(testObj,'ok')
testObj = null;
console.log(weakMap.get({test:'fail'}))// Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory). while in Map until there is a refrence of the object in some part like as a key in map it will not be removed by garbage collector;
// use case of such data structure : The main area of application for WeakMap is an additional data storage.

// example;

let visitCount = new WeakMap();

function countUser(user){
  let count = visitCount.get(user) || 0;
  visitCount.set(user,count+1)
}

let johnathon = {name:'Johnathon'};
countUser(johnathon)
countUser(johnathon)
countUser(johnathon)
countUser(johnathon)
countUser(johnathon)
countUser(johnathon)
console.log(visitCount.get(johnathon))
johnathon = null;
console.log(visitCount.get({name:'Johnathon'}))// now we dont have to clean up the visitcount after the object johnathon is null as in weakmap garbage collectore remove the object if its orignal refrence is gone
//Now we don’t have to clean visitsCountMap. After john object becomes unreachable, by all means except as a key of WeakMap, it gets removed from memory, along with the information by that key from WeakMap.

//for caching 

let cache = new WeakMap();

function process(obj){
  if(!cache.has(obj)){
    let result = {/* some process or fetching some data based on obj */}
    cache.set(obj,result);
    return result
  };
  return cache.get(obj);
}

let newObj = {/* some data */}
let result1 = process(newObj); // calculate

let result2 = process(newObj); // get data from cache cuz it has data for newObj

newObj = null; // now the newObj itself is null so we no longer need the cache of it and it will also be removed;

// weak set
// /WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

//WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.