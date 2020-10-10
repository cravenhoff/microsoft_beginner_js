/* var keyword */
// access the variable "after" the declaration
var name = "John";
console.log(name);

// Create a new variable and access it "before" the declaration
console.log(greeting); // Returns undefined since the variable "is declared" but we're yet to assign a value to it. In other words, it's "implicity" assigned.
var greeting = "Welcome";
console.log(greeting);

// let in function scope
function sayHello() {
    console.log(city); // Returns undefined and not an error as let would
    var city = "New York";
    console.log(`${greeting}, ${name}`); // Accessible within function
    console.log(city); // Accessible within function
}

sayHello(); // name and greeting variables accessible within sayHello()
var greet = `${sayHello()} from ${city}`; // Outputs an error saying "city" is not defined, since it's locally-scope and only available or accessible within sayHello().

/* let keyword */
let color = "red";
console.log(color);

// Try to access a variable declared using the let keyword before it's created
// console.log(brightness);
let brightness = "light"; // JavaScript outputs an error, as variables declared using let can't be accessed before initialization.
console.log(brightness);

function tellColor() {
    let myObject = "brush";
    console.log(myObject);
    console.log("%s %s", brightness, color);
}

tellColor();
let result = `${tellColor} ${myObject}`; // Returns an error saying myObject is not defined

const host = "localhost";
console.log(host);

host = "127.0.0.1"; // Returns an error saying const variable cannpt be reassigned a new value after initialization