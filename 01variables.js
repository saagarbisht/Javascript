let a = b = c = d = 10; // not recommended
console.log((a == b) == (c == d))
// = 'assignment operator'
// we can declare variables by 2 key words let and const 
// values which are constant can be declared by using const and rest by let (specially the refrence type values are declared by using const like Arrays, Objects, fucnctions(arrow))

let a1 = 12, b1= 23, c1 = 'hello'// not recommended

console.log(b1)

// let a = "declaring the a variable twice" // an error will occure cuz u can only declare a variable once but you can change its value as many time as you want if you have declared it with the let keyword

a='assigning a new value to the variable a'
console.log(a)

//variable naming
//1.they can only have letters, digits , and ($,_)
//2.first character can't be a digit ; let 1message = 'we can't name like this'; insted ; let message1 = 'we can name it like this
//3.can't use reserved words like let,const,switch,for,if,else,etc.

val = `10`; // possible but bad practice (to use variables without initializing)
console.log(val)

//  capital-named constants are only used as aliases for “hard-coded” values. like 
// const MY_DOB = '26/12/2002; not for const fetchDob = fetch('some url') 