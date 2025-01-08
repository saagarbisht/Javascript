//languages which have data types but the variables are not bound to any of them are called dyanamically typed languages(Javascript)
let amount = 100;
amount = '200'
console.log(amount)// but its a wrong practice that's why you shoud always use typscript in the production;

// there are 8 basic data types
// in which 7 are premitive 
// primitives are immutabel 
// 1 non - primitive
{
let num = 12 
let float = 12.22
}//number (it represent both integers and floting point numbers)
// there are a few special numeric values which belongs to this data type (number) which are Infinity, -Infinity, NaN(not a number, it's a result of an incorrect or an undefined mathematical operation)
let infinity = -1/0;//Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number
let notANumber = 'number'/1;//you can't divide a sting by a number so the result is nan (if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result like ; 1*3+56-NaN will result in NaN but with a exception if NaN ** 0 which results in 1)

console.log(infinity)
console.log(typeof notANumber)

let str = 'string' //string
/* 
there are 3 types of quotes used in javascript;
Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.
*/
let bool = false //boolean
// Boolean values also come as a result of comparisons: let res = 4 < 10; true 
let date = new Date() //date
let getApiData = null; //null (It’s just a special value which represents “nothing”, “empty” or “value unknown”.)
let getSalary;//undefined(The meaning of undefined is “value is not assigned”.)
console.log(getSalary)//If a variable is declared, but not assigned, then its value is undefined

// one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.


//bigint (the “number” type cannot safely represent integer values larger than (2^53 - 1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.  approx -9quadrillion  to +9quadrillion/ -9padam to +9padam )
//A BigInt value is created by appending n to the end of an integer:
const withoutBigInt = 90071992547409910 + 5 //90071992547409900 the result might not what we want;
const withBigInt = 90071992547409910n + 5n //90071992547409915n
const withoutBigInt2 = 90071992547409910 + 3//90071992547409900
const withBigInt2 = 90071992547409910n + 3n //90071992547409913n

/*
primitive - number,string,boolean,null,undefined,bigint,symbol
non-primitive - object
*/
const val = function () {
  return 4+4
}
console.log(typeof val )//function are an object in js but a special or unique type of object which can be invoked and called so to distinguish them from other simple object the typeof operator returns the value function its a language design / quirk of js

console.log(typeof null) // typeof null" returns "object" because of a historical quirk in the language; even though "null" is not considered an object, its internal representation in the early days of JavaScript was similar to how objects were represented, leading to this unexpected behavior with the "typeof" operator. Despite the "typeof" result, "null" is explicitly not an object in JavaScript and is used to signify the absence of a value