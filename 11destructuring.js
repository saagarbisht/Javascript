//Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.
let arr = ['John','Smith'];
let [firstName,surName] = arr;
console.log(firstName)
console.log(surName)
//Now we can work with variables instead of array members.
//Unwanted elements of the array can also be thrown away via an extra comma:
let [name, , ,country] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name)
console.log(country)
// we can use it with any iterable, not only arrays:
let [a,b,c] = 'abc'
console.log(a)
console.log(b)
console.log(c)
//That works, because internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.

//swaping values
let x = 12;
let y = 10;
console.log('x : ',x);
console.log('y : ',y);
[x,y] = [y,x];
console.log('x : ',x);
console.log('y : ',y);

//...rest // for getting rest of the elements
//Usually, if the array is longer than the list at the left, the “extra” items are omitted. If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":
let [game,wins,...extra] = ['football',22,'CR','messi','mbbape','menchister united','1.2b'];//The value of extra is the array of the remaining array elements.just make sure it has three dots before it and goes last in the destructuring assignment.
console.log(game)
console.log(wins)
console.log(extra)

//object destructuring
//The destructuring assignment also works with objects.
let options = {
  title: "Menu",
  width: 100,
  height: 200
};
//If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:
let {title, width:w, height,area : ar = 100} = options;//For potentially missing properties we can set default values using "=",
console.log(title)
console.log(w)
console.log(height)
console.log(ar)
// we can use rest operator just like we use array 

// assigning to predeclared variables
let personDetail = {
  message:'HI',
  isOnline:true,
}
let message, isOnline;
// {message,isOnline} = personDetail; // syntax error The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.
({message,isOnline} = personDetail);//to show JavaScript that it’s not a code block, we can wrap the expression in parentheses 
console.log(message)
console.log(isOnline)

let salaries = {
  'John':100,
  'Pete':300,
  'Mary':250,
};

function topSalary(obj){
  let maxSalary = 0;
  let maxName = null;
  for(let [person,salary] of Object.entries(obj)){
    if(salary > maxSalary){
      maxName = person;
      maxSalary = salary;
    }
  }
  return maxName;
}
console.log(topSalary(salaries));