// while loop
let i = 2;
while (i){// until the condition inside the ()parentheses  is truthy the block of code will run
  console.log('from while loop')
  i-- // 0 is a falsy value
}//A single execution of the loop body is called an iteration

//do-while loop
let y = 0
do {// this block of code will run atleast from 1 time even if the condition is falsy cuz the condition check is happening after the execution of this block
  console.log('from do-while loop')
}while(y);

// for loop
let z = 4
for(let i = 0; i < 4; i++){//initialization,condition checking, and increment or decrement all happens in the same parentheses in for loop and if the block of code runs until the condition above is truthy
  console.log('from for loop')
}

//we can force the exit at any time out of loop using the special break directive.

let counter = 8;
while(counter){
  console.log(counter);
  if(counter === 5)break;// if the condition inside if parantheses is truthy then the loop will break here with the break keyword
  counter--;
};

//The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

for(let i=0; i<10; i++){
  if(i % 2 !== 0)continue;
  console.log(i, ' is even')
}
// label for break/continue

outerloop: 
for(let i=0; i<3;i++){
  for(let j=0; j<3;j++){
    let input = prompt(`Enter the cordinates for : ${i}${j}`,'')//prompt is a inbult dom function which work only with the browser environment
    //in a very specific condition there is a use of label like this if we want to break out of the code if there ain't any input we do it like
    if(!input) break outerloop; 
  }
}
console.log('outside')

// switch case statement

let day = 'Friday';
let message;
switch(day){
  case 'Monday': 
  message = "It's a weekday get your ass to office";
  break;
  case 'Tuesday': 
  message = "It's a weekday get your ass to office";
  break;
  case 'Wednesday': 
  message = "It's a weekday get your ass to office";
  break;
  case 'Thursday': 
  message = "It's a weekday get your ass to office";
  break;
  case 'Friday': 
  message = "It's a weekday but i will send you home early";
  break;
  default :
  message = "It's a holiday today why did you call me"
  break;  
}

console.log(message)