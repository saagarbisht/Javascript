//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition
//Function Declaration
function foo(){
  console.log('function')
}
foo();//calling the function and we can call it as many times as we want

//A variable declared inside a function is only visible inside that function. what it means that a variable declared inside a function can only be access inside it we can't use it outside and if we do it will throw a syntax error;


let outerVariable = 4;

function foo2(){
  var innerVariable = 'hi';
  console.log(innerVariable) //we can use the variable x inside fuction body which is the scope of the variable (function body is the entire data b/w the two curly braces)
  console.log(outerVariable) //we can access every global or outer variable inside a function but not vice-versa//The function has full access to the outer variable. It can modify it as well.
}

foo2()//logs hi in the console

// console.log(innerVariable) //throw an refrence error that x is not defined cuz for the global scope the x inside the foo2 does't even exist

//variable shadowing
//When a variable declared within a function has the same name as a variable declared outside the function, the inner variable "shadows" the outer one. This means that within the function's scope, the inner variable takes precedence, and the outer variable becomes inaccessible.
globalThis.username = 'Jack'
function foo3(){
  let username = 'Tom' 
  console.log(username)// Tom
  console.log(globalThis.username)//Jack force way of using the outer variable but a wrong practice
}
foo3()
console.log(username) //Jack
console.log(globalThis)

//A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
//An argument is the value that is passed to the function when it is called (it’s a call time term).
function foo4(a,b/*these two are parameters */){
  console.log(a + b)
}

foo4(2,3/*these are arguments*/)
// default parameters
function foo5(a,b=0){//b has default value of 0 if we only pass one argument then the b will read the default value and a+b would be a but if i pass another value it will use the value istead of the default  
  console.log(a+b)
}
foo5(9,10)// result 19
foo5(9)// result 9
foo5(9,undefined)// result 9 if we pass undefined explicitly then also the default value kicks in
//In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.

// defalult value inside a function

function foo6(x){
  x = x ?? 0; // nullish coalescing operator
  console.log(Math.pow(x,2))
}
foo6()

//A function can return a value back into the calling code as the result
function foo7(a,b){
  return a+b
}

let result = foo7(3,6)
console.log(result)// 9 now the result variable holds the return value of the fucntion
//It is possible to use return without a value. That causes the function to exit immediately.

function foo8(){
  for(let i = 0; i<3; i++){
    if(i === 2) return; // this statement will break the loop as well as exit the function
    console.log('inside',i)//0,1
  }
}
foo8()
console.log('Outside')

//If a function does not return a value, it is the same as if it returns undefined:
function foo9(){
  return // undefine
  // or nothing //undefine
}

console.log(foo9())// undefined

//A function should do exactly what is suggested by its name, no more.
//function names should be concise and descriptive.

function showPrime(n){
  for(let i=2; i<n; i++){
    if(!isPrime(i)) continue;
    console.log(i)
  }
}

function isPrime(n){
  for(let i=2; i<n; i++){
    if(n % i === 0) return false
  }
  return true
}

showPrime(10)

//Function expressions
//There is another syntax for creating a function that is called a Function Expression.It allows us to create a new function in the middle of any expression.

let sayHi = function(){
  return 'Hi buddy';
}

//callback funcitons
function isUserOnline(isOnline,yes,no){
  isOnline ? yes() : no();
}

let online = function(){
  console.log('you are online')
};
let offline = function(){
  console.log('you are offline')
};

let isOnline = true

isUserOnline(isOnline,online,offline)

// arrow function;
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions. It’s called “arrow functions”

let func = (x,y) => {
  return x+y
} // return sum of two number or concat two strings

let fun2 = x => Math.pow(x,2) // single line shorter version

// generator function