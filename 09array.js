// ordered collection of element, thats a special data structure called array,

let arr1 = new Array() // creating by constructor;
let arr  = ['one','two','three','four','five',] // literal;

// accessing , replaceing , inserting
console.log(arr[0]) //  'one' accessing by bracket notation just like objects but we cant use dot notation here

arr[0] = 'ONE'; // simply replacing the value array are mutable;
arr[5] = 'five'; // inserting one just by square brackets 

// just like string total count can be get by length property
// element of an can be anything (literally anything) be it number,string,boolean,object or array itself or functions too
arr[6] = () => {
  return 44;
}
console.log(arr[6]()) // 44 
//The “trailing comma” style makes it easier to insert/remove items, because all lines become alike.(just a comma at the end of last elemnt so that the next one can be inserted easily)

// getting elemnts from the end of arr
console.log(arr.at(-1)); // it the parameter is +ve it stars from start and from end when its -ve

// pop,push,shift,unshift;

arr.lolo = 'gogo';
// the above statement did't give any error and there won't be any cuz array are objects underneath;

// for of (for array)
for(let value of arr){
  console.log(value)// iterate over only numeric value thats why it wont show arr.lolo;
}
//the length property is that it’s writable.
// with string we cant write the length property but in array its different
arr.length = 2;
console.log(arr)//['ONE','two',lolo:gogo] the last one is not event considered its value and we cant remove it with pop or other method we have to the array
// the simplest way to clear the array is: arr.length = 0;

let arR = ["a", "b"];

arR.push(function() {
  console.log( this );// this is the current array
});

arR[2](); // ?

// question 
/*
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.
*/

function getMaximalSubArray(arr){
  let maxSum = 0;
  let partialSum = 0;
  for(let item of arr){
    partialSum += item;
    maxSum = Math.max(maxSum,partialSum);
    maxArr.push(item)
    if(partialSum < 0){
      partialSum = 0;
    }
  }
  return maxSum;
}
// array methods
//add and remvove items (push,pop,shift,unshift)
// deleteing an item (splice)
let array = ['I','will','go','away',[1,2,3]]
delete array[1] // it removes the value from the index not the element the element will be set as undefine; its fine for object but not for array where we mostly deal with index 
console.log(array)
// thats where we use splice method but this method not only delete but can insert remove replace the elements
array.splice(1,1,"won't");// retuns array of removed elements
// 1 index (from where to start removing)
//1 only 1 item it can any number from array from index 1 it will start removing 1 element
// 'won't' it's an optional parameter as its for replacing the removed element
console.log(array)

// if we want to insert somethings without removal of other we can just enter 0 as the delete count like this
array.splice(array.length,0,'from','here')
console.log(array)
//-ve indexes are also allowed here
// subarray (slice)
const newArray = array.slice(0,3);// copies array from starting index(0 here) till ending (3 here) not including the ending index without any argument it copies the whole thing
console.log(array)
console.log(newArray)
// it creates a shallow copy;

// concatinationg array
let arr01 = [1,2,3,4,5];
let arr02 = [6,7,8,9];
const newArr = arr01.concat(arr02,10,11,12,[13,14])//It accepts any number of arguments – either arrays or values.
console.log(newArr)

const arrObj = {
  0:'Zero',
  1:'One',
  length:2,
  [Symbol.isConcatSpreadable]:true,// if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat
}
const newObjArr = newArr.concat(arrObj)
console.log(newObjArr)

// iterate 
// forEach (The result of the function (if it returns any) is thrown away and ignored.)

// Searching in Array
// indexOf, lastIndexOf, includes, find, findIndex, findLastIndex, filter

const searching = Array.from({length:20}).map((item,idx) => Math.pow(idx,2))
// indexOf
const gotItem = searching.indexOf(64) //
console.log(gotItem)
//If we want to check if item exists in the array and don’t need the index, then arr.includes is preferred.
const isItem  = searching.includes(4)
console.log(isItem);
//The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.
//idLastIndexOf(item)
//A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

//find(for an array of object we use)
let users = [
  {id:1,name:'xyz'},
  {id:2,name:'abc'},
  {id:3,name:'xyz'},
  {id:4,name:'ghi'},
  {id:5,name:'xyz'},
]
let result = users.find((item,index,allUsers)  => {
  if(item.id === 3) return true;
})

// the find method returns the element when it founds it where as the findIndex method returns the index of the element and it has the same syntax 
let result2 = users.findIndex((item,index,allUsers) => {
  if(item.id === 2) return true;
})

console.log(result)//{id:3,name:'efg'}
console.log(result2)//1

// and similarly the findLastIndex method search the element from right to left of an array and returns the index

//The find method looks for a single (first) element that makes the function return true. If there may be many, we can use arr.filter(fn).

let result3 = users.filter(function(item,index,allUsers){
  if(item.name  === 'xyz')return true;
})
console.log(result3)// it returs an array with all the matched results

// transforming an array;

// map
//adding salary to every object (transforming it)
let result4 = users.map(item => ({...item,salary:item.id * 10000}))
console.log(result4)

//sort (rearranging the array)
let userId = [5,16,1,3,2,4];//The items are sorted as strings by default.
userId.sort() 
console.log(userId)// 1,16,2,3,4,5;
//To use our own sorting order, we need to supply a function as the argument

userId.sort((a,b) => a-b)
console.log(userId)

//reverse 
userId.reverse();
console.log(userId)

//split and join

let phoneNumber = '903842903';
let phoneNumArr = phoneNumber.split('');
console.log(phoneNumArr);// for splitting an string into an array. The split method has an optional second numeric argument – a limit on the array length
let phoneNumberStr = phoneNumArr.join('');
console.log(phoneNumberStr);// for splitting an array into an string

// reduce/reduceRight(they are used to calculate single value based on the array.)
let numsArray = [4,7,9,10,55];
let val = numsArray.reduce(function(accumulator,item,index,array){
  return accumulator + item
})
console.log(val)
// accumulator is the result of previous function call equals initial the first time(initial is the second argument after the function its the starter value and if not given it will take first element of array as initial value and start iteration from the 2nd element, in some cases it gives error like in an empty array so we should provide the initial value)
// item is the current element, index is the items postition, array is the entire array;

// reduceRight does the same as reduce but goes right to left;

//Array.isArray
//Arrays do not form a separate language type. They are based on objects.So typeof does not help to distinguish a plain object from an array But arrays are used so often that there’s a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.


// thisArg
//The value of thisArg parameter becomes this for func. Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept this parameter

let candidate = {
  min:21,
  max:40,
  canJoin:function(person){
    return person.age >= this.min && person.age < this.max;
  }
}
let candidateList = [
  {name:'Ravi',age:32},
  {name:'Ravi',age:21},
  {name:'Ravi',age:52},
  {name:'Ravi',age:44},
]
let qualifiedCandidates = candidateList.filter(candidate.canJoin,candidate)
console.log(qualifiedCandidates)

let usersNew = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr){
  return arr.reduce((acc,cv) =>{
    acc[cv.id] = cv;
    return acc;
  },{})
}

let usersById = groupById(usersNew);
console.log(usersById)

