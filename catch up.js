// data types 
// 1.string
// 2.arrays
// 3.boolean
// 4.objects
// 4.numbers symbols
// 7.undefined
// 8.null

// keywords->reserved word for a programing language

// 1.string ->use double quotes,single quotes or backticks (allow interpolation->injecting values into string)
 const name ="john doe"
 console.log(name)


 //declaring variables
 let age = 19
  console.log (age)
//reassign
age=20
console.log (age)

//scope
var car ='audi'
console.log (car)

const firstName = "jane";
const greeting = `Hello, ${firstName}`;

console.log(greeting);
//booleans
//1.selection ->switch if
//2.repetition ->while/do while

// comparison operators
/**
*loose equality ==
*strict equality === sticks the value and datatype
*loose inequality !=
*strict inequality !==
*/

//number operator
/**
 * < > =
 */

// logical operators
/**
 * AND &&
 * OR ||
 * DOUBLE BAG !! ->CONVERT DATA TO BOOLEANS
 * BANG!
 * ZERO IS INTERPRETED AS FALSE
 */
console.log(!false)
console.log(typeof String(34)) //string
console.log(!! 1) //true

//checks for truthy
console.log(20)
if (age >=20)
{
    console.log ("you can go out")
}
else {
    console.log("you are not allowed to go out")
}

//natural terminating loop
let count= 0;
while(count < 5 ){
    console.log (count)
     count =count +1
     //count
}console.log (count)

//objects -> collection oof data stored in key value pairs
const person = {
    firstName: 'jane',
    lastname: 'joe',
  
    // Special keys using quotes
    "full name": "jane joe",
    age: 20,
  
    // Nested objects
    address: {
      county: 'nairobi'
    }
  };
  
  // Accessing Values:
  // 1. Dot Notation (preferred):
  console.log(person.address.county);  // Output: "nairobi"
  
  // 2. Bracket Notation (useful for dynamic property names):
  console.log(person['address']['county']); // Output: "nairobi"
  
  // Adding Values:
  person.race = 'asian';
  console.log(person);  // Output: { ... (full object including "race") }
  
  // Updating Values:
  person.age = 21;
  console.log(person.age);  // Output: 21
  
  // Deleting Values:
  delete person.race;
  console.log(person);  // Output: { ... (object without "race") }
  
  // Iterating Over Properties:
  for (const key in person) {
    console.log(person[key]);  // Output: values of all properties
  }
  
  // Object.keys() for property names (not values):
  console.log(Object.keys(person));  // Output: ["firstName", "lastname", "full name", "age", "address"]
  
  // There's no built-in method for object values directly, but you can use a loop:
  const personValues = [];
  for (const key in person) {
    personValues.push(person[key]);
  }
  console.log(personValues); // Output: (array containing all property values)