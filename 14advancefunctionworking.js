"use strict"
// recursion and stack
//Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler.
//When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.

function pow(x,n){
  if(n===1) return x;
  return x*pow(x,n-1);
}

// const pow = (x,n) => (n === 1) ? x : x * pow(x,n-1); // shorter way of writing the same pow function
console.log(pow(3,3))

//When pow(x, n) is called, the execution splits into two branches: 
// 1st base of recursion which is when n === 1 stop further execution and return every thing
// 2nd recursive step which is to repeat the function until the base condition is fulfilled

//he recursion reduces a function call to a simpler one, and then – to even more simpler, and so on, until the result becomes obvious.

//The maximal number of nested calls (including the first one) is called recursion depth. In our case, it will be exactly n

//The maximal recursion depth is limited by JavaScript engine. We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for the majority of them.

// execution context and stack
//The execution context is an internal data structure that contains details about the execution of a function: where the control flow is now, the current variables, the value of this and few other internal details

/*
One function call has exactly one execution context associated with it.

When a function makes a nested call, the following happens:

.The current function is paused.
.The execution context associated with it is remembered in a special data structure called execution context stack.
.The nested call executes in the same manner.
.After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.
(new current execution context is on top (and bold), and previous remembered contexts are below)
*/
//As we can see from the illustrations above, recursion depth equals the maximal number of context in the stack.
//Note the memory requirements. Contexts take memory. In our case, raising to the power of n actually requires the memory for n contexts, for all lower values of n. A loop-based algorithm is more memory-saving:

//Any recursion can be rewritten as a loop. The loop variant usually can be made more effective.

//recursive traversal.
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

function totalEmployeeSalary(department){
  if(Array.isArray(department)){
    return department.reduce((total,employee) => total + employee.salary,0);
  };
  let salaryTotal = 0;
  for(let subDepartment of Object.values(department)){
    salaryTotal += totalEmployeeSalary(subDepartment)
  }
  return salaryTotal;
}

const totalSalary = totalEmployeeSalary(company);
console.log(totalSalary)

//Linked list
// there’s a problem with arrays. The “delete element”(unshift) and “insert element”(shift) operations are expensive. The only structural modifications that do not require mass-renumbering are those that operate with the end of array: arr.push/pop. So an array can be quite slow for big queues, when we have to work with the beginning. Alternatively, if we really need fast insertion/deletion, we can choose another data structure called a linked list.

/*
The linked list element is recursively defined as an object with:
. value.
. next property referencing the next linked list element or null if that’s the end.
*/

let list = {value:1};
list.next = {value:2};
list.next.next = {value:3};
list.next.next.next = {value:4};
list.next.next.next.next = null;
console.log(list);
/**
list in 
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
 */
// if now we have to remove or change the element from start its rather fast here
list.value = 'first';
list.next = list.next.next;
console.log(list)
//The main drawback is that we can’t easily access an element by its number. In an array that’s easy: arr[n] is a direct reference. But in the list we need to start from the first item and go next N times to get the Nth element.

// const sumTo = n => n === 0 ? n : n + sumTo(n-1);
// const sum = sumTo(9652); // 9652 max recursion depth;
// console.log(sum);

// rest and spread 

function sumAll(...args){
  let sum = 0;
  for(let arg of args) sum+=arg;
  return sum;
}
console.log(sumAll(1,2,3,4,5))

//The rest parameters must be at the end

//There is also a special array-like object named arguments that contains all arguments by their index. In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function. But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods.

function showName(){
  console.log(arguments);//{ '0': 'Sagar', '1': 'Bisht' } it's iterable
}
showName('Sagar','Bisht')
//If we access the arguments object from an arrow function, it takes them from the outer “normal” function.

//As we remember, arrow functions don’t have their own this. Now we know they don’t have the special arguments object either.

//spread
// Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.

// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

//We also can pass multiple iterables
// the spread syntax can be used to merge arrays

let arr = [3,5,1,7,2,4];
console.log(Math.max(...arr));

// any iterable can do it 

let str = 'Hello';
console.log([...str])
//The spread syntax internally uses iterators to gather elements, the same way as for..of does
//So, for the task of turning something into an array, Array.from tends to be more universal.


//Variable scope, closure
// code blocks

//If a variable is declared inside a code block {...}, it’s only visible inside that block.
{
  let message = 'Hello';
  console.log(message);
}
{
  let message = 'world';
  console.log(message);
}
// console.log(message);// error refrence error

//each block is seperate form one another so we can declare and use the same vaiable name they will hold different values as there block suggests but only within the code block {} without it there would be error for redecalring the variabl e
//We can use this to isolate a piece of code that does its own task, with variables that only belong to it
//For if, for, while and so on, variables declared in {...} are also only visible inside:

//nested function
// A function is called “nested” when it is created inside another function.It is easily possible to do this with JavaScript. We can use it to organize our code

function sayHiBye(first,last){
  function getFullName(){
    return first+' '+last;
  }
  console.log("hello, ",getFullName())
  console.log("bye, ",getFullName())
}
sayHiBye('Sagar','Bisht')

//a nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables.

function makeCounter(){
  let count = 0;
  return function(){
    return count++;
  }
}
let counter = makeCounter();
console.log(counter());

//Lexical Environment

/*
In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

The Lexical Environment object consists of two parts:

1. Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
2. A reference to the outer lexical environment, the one associated with the outer code.

A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.

global Lexical Environment, associated with the whole script.

A variable is a property of a special internal object, associated with the currently executing block/function/script.

1.Working with variables is actually working with the properties of that object.
2.Lexical Environment is a specification object(“Lexical Environment” is a specification object: it only exists “theoretically” in the language specification to describe how things work. We can’t get this object in our code and manipulate it directly.)

function declaration
A function is also a value, like a variable. The difference is that a Function Declaration is instantly fully initialized.
When a Lexical Environment is created, a Function Declaration immediately becomes a ready-to-use function (unlike let, that is unusable till the declaration). this behavior only applies to Function Declarations, not Function Expressions where we assign a function to a variable, such as let say = function(name)....

lets talk about the counter:
function makeCounter(){
  let count = 0;
  return function(){
    return count++;
  }
}
let counter = makeCounter();
console.log(counter());
console.log(counter());

At the beginning of each makeCounter() call, a new Lexical Environment object is created, to store variables for this makeCounter run. So we have two nested Lexical Environments, 
  {make count
    count:0 
    {counter
      ref:outer
      empty
    }
  }
  during the execution of makeCounter(), a tiny nested function is created of only one line: return count++. We don’t run it yet, only create.
  All functions remember the Lexical Environment in which they were made. all functions have the hidden property named [[Environment]], that keeps the reference to the Lexical Environment where the function was created: and that’s how the function remembers where it was created, no matter where it’s called. reference is set once and forever at function creation time.
  Later, when counter() is called, a new Lexical Environment is created for the call, and its outer Lexical Environment reference is taken from counter.[[Environment]]
  so.Now when the code inside counter() looks for count variable, it first searches its own Lexical Environment (empty, as there are no local variables there), then the Lexical Environment of the outer makeCounter() call, where it finds and changes it.
*/

//closure
/*
In programming languages, a closure, also lexical closure or function closure, is a technique for implementing lexically scoped name binding in a language with first-class functions. Operationally, a closure is a record storing a function[a] together with an environment.[1] The environment is a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created.[b] Unlike a plain function, a closure allows the function to access those captured variables through the closure's copies of their values or references, even when the function is invoked outside their scope.
*/

//closure
//A Closure is a technique where a function is bundled (enclosed) with its surrounding variables, the lexical environment all functions are naturally closures (there is only one exception)

//Garbage collection
/*
Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes. That’s because there are no references to it. As any JavaScript object, it’s only kept in memory while it’s reachable.
However, if there’s a nested function that is still reachable after the end of a function, then it has [[Environment]] property that references the lexical environment.
In that case the Lexical Environment is still reachable even after the completion of the function, so it stays alive.
*/

function f(){
  let value = 123;
  return () => {
    console.log(value)
  }
}

const value = f();//
value();//123

//A Lexical Environment object dies when it becomes unreachable (just like any other object). In other words, it exists only while there’s at least one nested function referencing it.

// The old var
//The var declaration is similar to let. Most of the time we can replace let by var or vice-versa and expect things to work . Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks. The same thing for loops: var cannot be block- or loop-local:
if(true){
  var test = 'test'
}
console.log(test)//var ignores code blocks, we’ve got a global variable test

//If a code block is inside a function, then var becomes a function-level variable:
function welcome(){
  var greet = 'Hello';
}
welcome()
// console.log(greet)// refrenceError: greet is not define

//var pierces through if, for or other code blocks. That’s because a long time ago in JavaScript, blocks had no Lexical Environments, and var is a remnant of that

//If we declare the same variable with let twice in the same scope, that’s an error With var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored

//var variables are defined from the beginning of the function, no matter where the definition is (assuming that the definition is not in the nested function).

function sleep(){
  label = 'Greet';
  if(true){
    console.log(label);
  }
  if(true){
    var label;
  }
}
sleep()// it would be same as var label at the start of the function scope. because all var are “hoisted” (raised) to the top of the function.

//Declarations are hoisted, but assignments are not.
var phrase = 'Hello'
//The line var phrase = "Hello" has two actions in it:
// 1.Variable declaration var
// 2.Variable assignment =.
//The declaration is processed at the start of function execution (“hoisted”), but the assignment always works at the place where it appears

function hoistingVar(){
  var sum; //declaration work at the start and the default assign is undefined
  console.log(sum); // undefined defaul assignment
  sum = 'sum'// assignment now sum = 'sum'
}
hoistingVar();
//all var declarations are processed at the function start, we can reference them at any place. But variables are undefined until the assignments.

//IIFE (Immediately invoked function expresssions)
//In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).

(function(){
  var message = 'foo1'
  console.log(message)
})();
//The Function Expression is wrapped with parenthesis (function {...}), because when JavaScript engine encounters "function" in the main code, it understands it as the start of a Function Declaration. But a Function Declaration must have a name Even if we add a name, that won’t work, as JavaScript does not allow Function Declarations to be called immediately, So, the parentheses around the function is a trick to show JavaScript that the function is created in the context of another expression, and hence it’s a Function Expression: it needs no name and can be called immediately.

// other ways to create IIFE

(function(){
  var message = 'foo2'
  console.log(message);
}());

+function(){
  console.log('just about any other unary operator can also be used -,!,~,typeof, delete,void...')
}();

void function(){
  console.log('void and parentheses are immensely preferable')
}();

//Global Object
//The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.Recently, globalThis was added to the language, as a standardized name for a global object,
console.log('hello')
globalThis.console.log('hello') //They are effectively the same in common environments;

//function object, NFE
//a function in JavaScript is a value every value in JavaScript has a type(functions are objects),Function objects contain some useable properties.

//name(a function’s name is accessible as the “name” property:)

console.log(hoistingVar.name)// name hoistingvar
//his feature is called a “contextual name”. If the function does not provide one, then in an assignment it is figured out from the context. There are cases when there’s no way to figure out the right name. In that case, the name property is empty,
let arrFun = [function(){}]
console.log(arrFun[0].name)

// length
function f1(a,b,c){}
console.log(f1.length)//  it returns the number of function parameters

function f2(a,b,...rest){}
console.log(f2.length)//  rest parameters are not counteds

// custom properties
// ..Here we add the counter property to track the total calls count:
function countFunctionCall(){
  console.log('from inside function')
  countFunctionCall.counter++;
}
countFunctionCall.counter = 0;
countFunctionCall()
countFunctionCall()
countFunctionCall()
countFunctionCall()
console.log('the function countfunctioncall is called ', countFunctionCall.counter, ' times')

// Named Function Expression
let username = function name (who){
  if(who){
    console.log('hello ',who)
  }else{
    name('guest');
  }
}
// we still have a Function Expression. Adding the name did not make it a Function Declaration, because it is still created as a part of an assignment expression
console.log(username.name)//name
username('Jack')
let getUser = username;
username = null;
getUser()

// 'new function'
let foo = new Function("a","b","...c",'console.log(c);return a+b')
console.log(foo(1,2,4,6,2,))
//when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.

//setTimeout and setInterval;
/*
setTimeout allows us to run a function once after the interval of time.
setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
*/
//setTimeout (setTimeout(func,delay(in ms),...func args))
function sayHi(greeting,user){
  console.log(greeting,' ',user)
}
setTimeout(sayHi,2000,'Hello','Tom');//say hi function to be run, after 2000 ms or 2s and 'hello and tom' are agruments for the sayhi function
//setTimeout expects a reference to a function.
//A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
let timeId = setTimeout(() => {console.log('hello')},1000)
clearTimeout(timeId);//we schedule the function and then cancel it (changed our mind). As a result, nothing happens:

//setinterval(same syntax as settimeout)
//ll arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.
//To stop further calls, we should call clearInterval(timerId).
let intervalId = setInterval(() => {console.log('hello')},1000);
clearInterval(intervalId);

//Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

//When a function is passed in setInterval/setTimeout, an internal reference is created to it and saved in the scheduler. It prevents the function from being garbage collected, even if there are no other references to it.
//For setInterval the function stays in memory until clearInterval is called. There’s a side effect. A function references the outer lexical environment, so, while it lives, outer variables live too. They may take much more memory than the function itself. So when we don’t need the scheduled function anymore, it’s better to cancel it, even if it’s very small.

//Zero delay setTimeout {setTimeout(func, 0)} This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.So the function is scheduled to run “right after” the current script.
setTimeout(() => {console.log('zero delay timeout')})

//This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete. So the function is scheduled to run “right after” the current script.

// decorators and forwarding..

//Transparent caching
//If the function is called often, we may want to cache (remember) the results to avoid spending extra-time on recalculations.

function slow(x){
  console.log('called with ',x);
  return x;
}

// decorator a special function that takes another function and alters its behavior.

function cachingDecorator(func){
  let cache = new Map();
  return function(x){
    if(cache.has(x)){
      console.log('now it has')
      return cache.get(x);
    };
    let result = func.call(this,x)
    cache.set(x,result);
    return result;
  }
}
//The idea is that we can call cachingDecorator for any function, and it will return the caching wrapper. That’s great, because we can have many functions that could use such a feature, and all we need to do is to apply cachingDecorator to them.
slow = cachingDecorator(slow);
slow(4)

// func.call
// The caching decorator mentioned above is not suited to work with object methods.
// lets apply the same cachingDecorator on the object and see what happens

let workers = {
  square(i){
    return Math.pow(i,2);
  },
  cube(x){
    return x * this.square(x);
  },
}
console.log(workers.cube(2))// working properly now let use the caching wrapper;
workers.cube = cachingDecorator(workers.cube);
//console.log(workers.cube(2))// typeerror square undefine The reason is that the wrapper calls the original function as func(x). And, when called like that, the function gets this = undefined. So, the wrapper passes the call to the original method, but without the context this. Hence the error.
//There’s a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this. we can use call in the wrapper to pass the context to the original function:
console.log(workers.cube(2))

// in the context of the slow function declartion this does not change any thing as the this for slow is the global context which being window in browser and globalThis in node environment etc.

// impt info
/*
this in the context of slow 
1. When we declare a function like function slow(x) { ... } and then call it directly like slow(4), the this context inside slow is determined by how it's called. In non-strict mode, it defaults to the global object (window in browsers, global in Node.js). In strict mode ("use strict";), this is undefined.
2. When we wrap slow with cachingDecorator without func.call(this, x), the this context inside the wrapped function is the same as described above (global object or undefined in strict mode).
3.When we do use func.call(this, x), we're explicitly setting the this context to whatever this is in the scope where the wrapped function is called. In the case of slow(4), the this in the global scope is the global object, so func.call(this, x) effectively does the same thing as if we didn't use .call at all. This is why it's negligible in this context.

this in the context of workers.cube
1.When we define a method on an object like workers.cube = function(x) { ... } and then call it as workers.cube(2), the this context inside cube is set to the workers object. This is how methods work in JavaScript.
2.When we wrap workers.cube with cachingDecorator without func.call(this, x), the this context inside the wrapped function is not automatically set to workers. It would be the global object (or undefined in strict mode), breaking the this.square(x) call.
3.When we do use func.call(this, x), the this context inside the wrapped function is explicitly set to the this value where the wrapped function is called. In the case of workers.cube(2), the this is workers, so func.call(this, x) correctly sets the this context inside the wrapped cube function to workers, allowing this.square(x) to work as intended.
*/ 

// multi argument
//let’s make cachingDecorator even more universal. Till now it was working only with single-argument functions.

function cachingDecorator2(func){
  let cache = new Map();
  return function(args){
    let key = args.map(String).join(',')//args.map(String) is indeed a shortcut for iterating over the args array and converting each element to a string.
    if(cache.has(key)){
      console.log(key)
      console.log('this time from inside')
      return cache.get(key);
    }
    const result = func.apply(this,args)
    cache.set(key,result);
    return result; 
  }
}

let users = {
  bonus(totalHour,overtime) {
    return totalHour + overtime > 200 ? 20000:10000
  },
  salary(perHour,totalHour,overtime){
    return    perHour*totalHour + overtime * perHour * 1.5 + this.bonus(totalHour,overtime)
  }
}

users.salary = cachingDecorator2(users.salary);
console.log(users.salary([100,160,44]))

// func.apply
// the syntax and use is same as the call but the only difference is the second arg. the second argument is an array containing all the arguments to be passed to the function.
// func.apply(context,args) // context current this, args array of arguments.
//It runs the func setting this=context and using an array-like object args as the list of arguments.
// in the above caching Decorator2 we did func.call(this,...args) in apply it would be func.apply(this,args).
//Passing all arguments along with the context to another function is called call forwarding. When an external code calls such wrapper, it is indistinguishable from the call of the original function function . just like how we call the user.salary it is called just like it was meant to but we have wrapped it with a cache storage .


// losing this
//When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: “losing this”.
let student = {
  name:'John',
  sayHi(){
    console.log('hello, mr. ',this.name)
  }
}
setTimeout(student.sayHi, 3000);// hello mr. undefined (Once a method is passed somewhere separately from the object – this is lost.)  the function student.sayHi is passed as a reference, but the context (this) inside that function is not set explicitly.
setTimeout(() => {student.sayHi()}, 3000);// this works properly. The reason this version works is due to how arrow functions handle this

//Functions provide a built-in method bind that allows to fix this
//bind
let customer = {
  name:'Jack',
  age:'23',
  cart:[{product:'T-shirt',id:1},]
}
function getCustomerDetails(){
  console.log('I am',this.name,'and this year i will be',this.age,'years old')
}
const customer1Detail = getCustomerDetails.bind(customer);
customer1Detail()
// lets try it with settimeout
setTimeout(student.sayHi.bind(student), 5000);// properly works

// partial function application ( we create a new function by fixing some parameters of the existing one.)
//we create a new function by fixing some parameters of the existing one.
function mul(a,b){
  return a*b;
}
let double = mul.bind(null,2) // null is the context and 2 is the first argument
console.log(double(2))
console.log(double(3))
//we actually don’t use this here. But bind requires it, so we must put in something like null.
//The benefit of partial function is that we can create an independent function with a readable name (double, triple). We can use it and not provide the first argument every time as it’s fixed with bind


//going partila without context
function partial(func,...argsBound){
  return function(...args){
    return func.call(this,...argsBound,...args)
  }
}

let greetUser = {
  name:'Jane',
  sayHi(time,phrase){
    console.log(`${time} : ${this.name} : ${phrase}`)
  }
}

greetUser.sayNow = partial(greetUser.sayHi,new Date());
greetUser.sayNow('Sagar')

// you cannot "double bind" a function in the sense of applying bind twice and having both bindings take effect. The bind method creates a new function. If you call bind on a function that has already been bound, the second bind call will create another new function, but the this value and pre-filled arguments from the first bind call will be preserved.

function bound(){
  console.log(this.name)
}
bound.count= 10
const newbound = bound.bind({name:'jack'})
console.log(bound.count)
console.log(newbound.count)
//bind focuses on creating a new function with a specific this context and potentially pre-filled arguments.Additional properties attached to the original function object (like count) are not automatically transferred to bound functions. They are independent.

/*
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user,true),user.login.bind(user,false))
*/

// arrow functions
//arrow functions do not have this. If this is accessed, it is taken from the outside. there are functions where we usually don’t want to leave the current context. That’s where arrow functions come in handy. 

const listlog = function(std){console.log(this.title,' : ',std)}

let group = {
  title : 'Our Group',
  students:['John','Pete','Alice'],
  showList(){
    this.students.forEach(listlog.bind(this))
  }
}
group.showList()
// Due to their lexical this, arrow functions cannot be rebound using bind, call, or apply. Their this is determined by the surrounding scope at the time of their definition.

function collectArguments(){
  console.log(arguments)
  return () => console.log(arguments)
}
const arrowArguments = collectArguments(2,3,4,'jane',true,{})//{ '0': 2, '1': 3, '2': 4, '3': 'jane', '4': true, '5': {} }
arrowArguments()//{ '0': 2, '1': 3, '2': 4, '3': 'jane', '4': true, '5': {} }
//Arrow functions also have no arguments variable.  you try to access arguments inside an arrow function, it will refer to the arguments object of the nearest enclosing non-arrow function. If there's no enclosing non-arrow function, it will result in an error in strict mode or refer to the global object in non-strict mode.
/**
  Arrow function
Do not have this
Do not have arguments
Can’t be called with new
 */