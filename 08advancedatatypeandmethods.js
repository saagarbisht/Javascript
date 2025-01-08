// JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. They also provide methods to call as such. 
//primitives are not objects
//Objects are “heavier” than primitives. They require additional resources to support the internal machinery.

// A primitive as an object 
//Primitives are still primitive. A single value, as desired.
//The language allows access to methods and properties of strings, numbers, booleans and symbols.
//In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.
//The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt
let str = 'hello world!'
console.log(str.toUpperCase())// HELLO WORLD!
//The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
//That method runs and returns a new string (shown by console).
//The special object is destroyed, leaving the primitive str alone.
//So primitives can provide methods, but they still remain lightweight.

// to create a wrapper we have to use the keyword new with there corresponding wrapper type
const strObj = new String(str);// but it's highly unrecommended to use them as they cause some crazy things;like
let num = new Number(0)
if(num){
  console.log(num,' is a truthy value') // this code will run cuz objects are always truthy in boolean
}
//On the other hand, using the same functions String/Number/Boolean without new is totally fine and useful thing. They convert a value to the corresponding type: to a string, a number, or a boolean (primitive).
//The special primitives null and undefined are exceptions. They have no corresponding “wrapper objects” and provide no methods. In a sense, they are “the most primitive”.
str.test = 999; //return undefined first it will look for any .test property in the String object an when it won't find any it will return undefined but it won't set the new property test for that we have to explicitly create a String constructor like

let anotherStr = new String(str);
anotherStr.test = 999;
console.log(anotherStr.test)

// Numbers
let oneMillion = 1_000_000;
// or
let twoMillion = 2e6;
console.log(oneMillion)
console.log(twoMillion)

let oneMeter = 1 / 1000;
//ot
let twoMeter = 2e-3;
console.log(oneMeter)
console.log(twoMeter)

// hex 0x prefix and then hex number
// binary 0b prefix and then binary number
// octal 0o prefix and then octal number

// 4 rounding methods in Number
// floor,ceil,round trunc

let roundingNumber = 3.2;
let roundingNegativeNumber = -1.1;
// floor
console.log(Math.floor(roundingNumber))// 3 make it lowest round number 
console.log(Math.floor(roundingNegativeNumber))// -2 make it lowest round number 

//ceil
console.log(Math.ceil(roundingNumber))// 4 make it hight round number 
console.log(Math.ceil(roundingNegativeNumber))// -1 make it highest round number 

// round
console.log(Math.round(roundingNumber))// 3 make it nearest round number 
console.log(Math.round(roundingNegativeNumber))// -1 make it nearest round number 

// trunc 
console.log(Math.trunc(roundingNumber))// 3 remove everything after decimal thats it it does't matter if it's 3.1 or 3.9 it will be just 3 
console.log(Math.trunc(roundingNegativeNumber))// -1 

// toFixed
console.log(roundingNumber.toFixed(4))// 3.2000 it round the number with 4 digits after the decimal as we give the argument; but it returns the rounded value as string 

console.log(1e308)// after this number it will show infinity

// NaN in numbers
console.log(NaN === NaN) // NaN is a unique value so it cant be same and we can't check values like this so we have a is NaN fucntion
console.log(isNaN(str)); //true
console.log(isFinite(false))

/// in js there are several edge cases and to delt with them there is another comparision method Object.is
// the two edge cases below are the once in which you might want to use Object.is other wise most often you would use strict equality
console.log(Object.is(NaN,NaN)) // true
console.log(Object.is(0,-0)) // false

//Numeric conversion using a plus + or Number() is strict. and in some cases we want to extract number from string until we cant like in 12px we want the number but if we use +"12px" we cant if will give NaN
console.log(+'12px')
// and for these cases we use parseInt and parseFloat
console.log(parseInt('12px'))// 12 will spit out it will onlu work if the number is on left side like 12px if we use Rs.112 it will reutrn NaN

// JS has a small Math object library which contain some inbuilt fuctions and constants to use 

//String 
let newString = 'Hello';
// length 
console.log(newString.length) // length property;
// accessing characters 

console.log(newString[0])// H -ve value wil give undefined 
console.log(newString.at(-1))//o -ve values will give characaters from last
//-0 and 0 are numerically equal, they are not strictly identical, as they have different bit representations.
console.log(0 === -0) // true
console.log(Object.is(0,-0)) // false

// stings and immutable
// strings can't be changed in js we can only reassign them
let changeStr = 'Hello';
changeStr[0]= 'e';// nothing happens
console.log(changeStr)
// reassigning the entire value
changeStr = 'eello' // change to eello
console.log(changeStr)

// toLowerCase() toUpperCase() for upper and lower casing;

// searching for substring
let longString = 'Widget with id wid';
console.log(longString.indexOf("with"))//7 with w starts at index of 7
console.log(longString.indexOf("id"))//1 .idget got id in widget at index 1
// starts from the start of the string and to start from the end of the string we can use lastIndexOf()
// now there is a issue with this method as if the value is at the 0th index it will return 0 but if we put it in conditional statement it will be false as 0 is a falsy value like
if(longString.indexOf('Widget')){
  console.log('got the widget')
  // this will never run we can do something like longString.indexOf('Widget') != -1
}
// now there are some modern methods for this like includes, startsWith endsWith which retun true or false as an answer;
if(longString.includes('Widget')){
  console.log('got the widget') 
  // this will run properly
  console.log(longString.startsWith("Wi"))//true
  console.log(longString.endsWith("id"))//true
}
// getting a substing
// substring, substr and slice
let substrings = 'substring'
console.log(substrings.substring(0,2))
console.log(substrings.slice(0,2)) // the secons parameter give the element up to that index but not the one the is given
console.log(substrings.substr(0,2))// depreciated the second parameter gives the number of characters (2)


// the substring method has a little quirk 
console.log(substrings.slice(6,2)) //"" empty string
console.log(substrings.substring(6,2)) //"bstr" it reverse the order from 6,2 to 2,6

let codePoint = '';
for(let i = 65; i < 220; i++){
  codePoint += String.fromCodePoint(i) + ' ';
}
console.log('this is the list of alphabets in accending order for comparision : ', codePoint)
//The characters are compared by their numeric code. The greater code means that the character is greater. The code for a (97) is greater than the code for Z (90).

// best way to compare 2 strnig in js is localCompare
let strOne = 'Witch';
let strTwo = 'witch';
console.log(strOne.localeCompare(strTwo)) // 1 if greater -1 if smaller and 0 if equall 

