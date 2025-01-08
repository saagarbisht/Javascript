// unary , binary
//'-' negation operator
//An operator is unary if it has a single operand
let num = 12;
num = -num// unary negation operator (reverse the sign of a number)
let num2 = 33;
console.log(num2 - num)// subtraction operator , is  a binary operator that subtracts one number from another

//exponentiation;
console.log(2 ** 4)//16
console.log(9 ** (1/2))//3
console.log(27 ** (1/3))//3

//concatenation of string with binary +
// if the binary + is applied to strings, it merges (concatenates) them:
let str1 = 'hello '
let str2 = ' world!'
let concatStr = str1 + str2
// unary + operator
console.log(+true)//convert boolean ture to number 1
console.log(+'')//convert empty string (falsy value) to number 0

let counter = 5
// console.log(++counter)//returns (6) change value of the variable (prefix increment)
// console.log(counter++)//returns (5) value of the variable before change (postfix increment)
console.log(counter)//6

//All comparison operators return a boolean value
console.log('sagar'<'sag')//false
// JavaScript uses the so-called “dictionary” or “lexicographical” order. in other words, strings are compared letter-by-letter.
// for instance, A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). 
// console.log(null == undefined)

// 4 logical operators
// || , && !, ??(nullish coalescing)
console.log(!'string')//convets to boolean and inverse the value (true to false and vice-versa)//false
console.log(!!'string')//convert to boolean; true 

let x=5;
let y=undefined;
console.log(x??y) //5 // its first check if x is null or undefined if it is is returns y otheriwise return x
//In other words, ?? returns the first argument if it’s not null/undefined.
//|| returns the first truthy value.
//?? returns the first defined value.