// String conversion
const toBeConverted = false; // it's a number but can be anything

const convertingToString = String(toBeConverted) //String constructor
const convertingToString2 =toBeConverted.toString() //toString method
const convertingToString3 = `${toBeConverted}`//templet literals
const convertingToString4 = "" + toBeConverted // string concatenation

//Number conversion
// Numeric conversion in mathematical functions and expressions happens automatically.
console.log('22' / '2') //11
console.log('22' % '2') //0
console.log('22' * '2') //44
console.log('22' - '2') //20
console.log('22' > '2') //true(conparision)
console.log('22' < '2') //false(comparision)
// but with a exception of + operator which acually concatinate the value if its string even to a number
console.log('22' + 2)//222
console.log(2 + 22 + "22")//2422

const toBeConverted2 = '22.34'
const convertingToNumber = Number(toBeConverted2)//Number constructor
const convertingToNumber2 = parseInt(toBeConverted2)//this will parse the number out of a string which even contain letters like 22.34avcds to (22) but the alphabates have to be after the number not before otherwise it will return NaN
const convertingToNumber3 = parseFloat(toBeConverted2)//)//this will parse the number out of a string which even contain letters like 22.34avcds to (22.34) but the alphabates have to be after the number not before otherwise it will return NaN
const convertingToNumber4 = +toBeConverted2//Unary Plus Operator:
// If the string cannot be converted to a number, you'll get NaN (Not a Number).

// true converts to 1
// false converts to 0
// undefined converts to NaN
// null converts to 0


//converting to boolean
// there are some truthy and falsy values truthy convert to true and same goes for falsy which converts to false
// falsy values - false,0,-0,'',"",``(string have to be empty),null,undefined,NaN
// besides the above value every other value converts to true;

const toBeConverted3 = 33;
const convertingToBoolean = Boolean(toBeConverted3)//true
const convertingToBoolean2 = !!toBeConverted3//true(double negation operator)
console.log(!!-0)//false
console.log(!!' ')//true