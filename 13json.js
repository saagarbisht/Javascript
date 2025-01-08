//The JSON (JavaScript Object Notation) is a general format to represent values and objects. 

// javascript provides methods
let obj = {
  name:'John',
  age:22,
  profession:'Senior Devepoler',
  salary:1200000,
  onWork:false,
}
let objJson = JSON.stringify(obj)
console.log(objJson)
//JSON-encoded object has several important differences from the object literal:
//Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".Object property names are double-quoted also. That’s obligatory. So age:22 becomes "age":22

let jsonObj = JSON.parse(objJson)
console.log(jsonObj)

/*JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:

Function properties (methods).
Symbolic keys and values.
Properties that store undefined.
*/
//The important limitation: there must be no circular references.

// full syntax of json.stringify

let room = {
  user:'John',
  number:12,
}
let meeting = {
  title:'Conference',
  participants:[{name:'Jane'},{name:'Alice'},{name:'Bob'}],
  place:room,
}
room.occupiedBy = meeting;
let meetingJsonData = JSON.stringify(meeting,['title','place','participants','name','user','number']);
console.log(meetingJsonData)

// the second argument is the array of keys that we want to convert to json and its strick so if there is a nested key inside we have to explicitly write its name,we can't add the romm.occupiedBy property as it is circular refrence and will cause error and there are many keys to write with hand which is not quite managable so we can use a replacer function here ..

let meetingJsonData2 = JSON.stringify(meeting,function(key,value){
  return (key === 'occupiedBy') ? undefined : value;
})
console.log(meetingJsonData2)

// in both meetingJsonData and meetingJsonData2 we did the same thing but the second one is more managable
//replacer function gets every key/value pair including nested objects and array items. It is applied recursively. The value of this inside replacer is the object that contains the current property.

//replacer can be a array or function 
// JSON.stingify(value,replacer,space) // space is for json formatting, The space parameter is used solely for logging and nice-output purposes.

// toJSON()

/*
In JavaScript, "toJSON" is a method that can be defined on an object to customize how that object is serialized into JSON when using JSON.stringify, while "JSON.stringify" is a global function that takes a JavaScript object and converts it into a JSON string, automatically calling the object's "toJSON" method if it exists; essentially, "toJSON" is a custom serialization mechanism within an object, while "JSON.stringify" is the primary function to convert data to JSON format
*/

let newRoom = {
  number:23,
  toJSON(){
    return this.number;
  }
}
let newMeetup = {
  title:'Meeting',
  newRoom,
}
console.log(JSON.stringify(newRoom));
console.log(JSON.stringify(newMeetup))

//toJSON is used both for the direct call JSON.stringify(room) and when room is nested in another encoded object.

//JSON.parse
//To decode a JSON-string, we need another method named JSON.parse.
let value = JSON.parse(meetingJsonData2)// it also supports a reviver function (Optional function(key,value) that will be called for each (key, value) pair and can transform the value.)
console.log(value)
//Besides, JSON does not support comments. Adding a comment to JSON makes it invalid.