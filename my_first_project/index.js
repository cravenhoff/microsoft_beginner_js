const place = 'World'; // Strings in 'single quotes'
const greeting = "Hello"; // Strings in "double quotes"
console.log("%s, %s", greeting, place); //Using substitutions (%s) to include variable values.

// Strings using backticks => ${templateStrings} or ${templateLiteral}
const shout = "Woohoo";
const city = "New York";
console.log(`${shout}, ${city}`); // Better alternative with greater readability.

/*  SUMMARY:

    => Console.Log
    A console window in the browser that runs and executes JavaScript commands.

    => JS Strings: Methods
    There are three ways to create strings in JavaScript, and these include:

    1. Single qoutes: ''
    2. Double quotes: ""
    3. Back ticks: ``

    => Outputting Variable Values
    Variables values can be outputted onto the console using either substitution or template strings:
    1. Substitutions:
    Syntax: %s
    Usage: Single or double quotes

    2. Template Strings / Template Literals
    Syntax: ${}
    Usage: Back ticks

*/