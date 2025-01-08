// date is a build in object it stores the date, time and provides methods for date/time management.

let now = new Date();
console.log(now)

//Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.
let certainDate = new Date(20079 * 24 * 3600 * 1000)  // putting date in milliseconds 
console.log(certainDate)

//An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.

// If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse 
console.log(Date.parse('2002-12-26'))//The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

let bd = new Date('2002-12-26')// it parses the date and converts it into millisecond from 1970 and then turn it into date object
console.log(bd)

//-ve milliseconds will give dates before jan 1 1970

// new Date(year,month,date,hours,mintes,seconds,ms) /

const christmas = new Date(2024,11,25,15,30,0,0)// month count is from 0 to 11 not 12 ( cuz 0 index is january)
console.log(christmas)

// for accessing different components of date
const christmasYear = christmas.getFullYear()// getYear is deprecated
console.log(christmasYear)

const christmasMonth = christmas.getMonth()
console.log(christmasMonth)// months are from 0 to 11

const christmasDate = christmas.getDate()
console.log(christmasDate)// date are from 1 to 31 

const christmasDay = christmas.getDay()
console.log(christmasDay)// day are from 0 (sunday) to 6 (saturday) 

// getHours(), getMinutes(), getSeconds(), getMilliseconds()

const christmasMillisecond = christmas.getTime();
console.log(christmasMillisecond);

console.log(new Date().getTimezoneOffset());

console.log(+now)// short hand to convert in milliseconds

//If we only want to measure time, we don’t need the Date object. There’s a special method Date.now() that returns the current timestamp.It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.

console.log(new Date(2025,0,0).toLocaleString())// get last day of every month