/* Converting Strings to Numbers and Vice Versa */
// parseInt() - Converting "numerical" strings to numbers
const num = "5";
const floatNum = "1.5";
const numConst = new Number(10); // Declared using the Number() Constructor 
const int = 100; // Declared using a literal number
// const someArray = [1, 3, 5];
// const someStr = "Woz!";
// const bool = true;
// const person = {
//     name: "Mike",
//     age: 32
// }
// function sayHi() {
//     console.log("Hi, " + person.name);
// }

console.log("---- First value of num ----");
console.log(num); // "5"
console.log(num + 5); // "55"

console.log("---- Converted value of num: parseInt() ----");
console.log(parseInt(num)); // 5
console.log(parseInt(num) + 5); // 10
console.log(parseInt("1.5")); // Disregards any special character and anything after that. Prints out just 1
console.log(parseInt("ABC")); // Returns NaN
console.log(typeof num); // string

console.log("---- Converted value of num: parseFloat() ----");
console.log(parseFloat(floatNum)); // 5
console.log(parseFloat(floatNum) + 5); // 10

console.log("---- Converted int to String: toString() ----");
console.log(int.toString());
console.log(int.toString() + 10);
console.log(typeof int.toString());

console.log("---- Original value of int ----");
console.log(typeof int);

// console.log("---- Typeof operator ----");
// console.log(typeof int); // Returns number
// console.log(typeof numConst); // Returns object
// console.log(typeof someArray); // Returns object
// console.log(typeof someStr); // Returns string
// console.log(typeof bool); // Returns boolean
// console.log(typeof person); // Returns object
// console.log(typeof sayHi); // Returns function

// console.log("---- Instanceof operator ----");
// console.log(int instanceof Number); // Returns false
// console.log(numConst instanceof Number); // Returns true (this time it works)
// console.log(someArray instanceof Array); // Returns true
// console.log(someStr instanceof String); // Returns false
// console.log(bool instanceof Boolean); // Returns false
// console.log(person instanceof Object); // Returns true
// console.log(sayHi instanceof Function); // Returns true