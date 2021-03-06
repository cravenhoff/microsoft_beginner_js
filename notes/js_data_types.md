## JavaScript Data Types
JavaScript is a "weakly" or **loosely-type language**. It differs from strongly-type languages such as C# or Java.

This means that variables declared in JavaScript do not require their values to be explicitly defined. JavaScript will automatically work out their data type. Furthermore, when dealing with different types of data in arithmetic operations, JavaScript will try to convert one data type to another so that a common denominator can be determined, allowing the arithmetic operation to be executed.

### Common Data Types
There are 7 different data types in JavaScript:
* **Number** - JavaScript does not differentiate between floats and integers. However, by default, all numbers are treated as floats.
* **BigInt** - For integers values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
* **String** - Literal or text characters.
* **Boolean** - True (1) or False (0) values.
* **Array** - A type of "object" data type that can store multiple values, called **elements**.
* **Object** - A composite data type containing properties and methods (functions).
* **Function** - Mini-programs and code blocks for reusable code / snippets.

The number, string, boolean and bigint data types are known as **Atomic Data Types**, since they deal with "atomic" - single values.

### Special Data Types
JavaScript also deals with **special** data types that do not fit into the above seven common data types.

* **NaN** (Not a Number) - Used to specify that a conversion of a particular data type cannot be executed as it is NOT A NUMBER.
* **Null** - An "empty" value "assigned" to a variable.
* **Undefined** - Value assigned by default to variables that are declared but do not have a value (and data type) explicitly defined.

### Checking Data Types in JavaScript
Values can be checked to confirm what data type they are using the following operators:

#### Typeof Operator
Format: Use the typeof keyword before the name of the variable or a value you want to check.

    Eg: typeof true; // will return "boolean". The return type of this operator is a string.

The typeof operator only tests primitive data types, so if typeof is applied to finding the data type of a non-primitive value like an Array, the operator will return a type of *Object* instead of *Array*.

    Eg: let carrots = 2;
    typeof carrots; // returns primitive type "number".
    
    let fruits = ["apples", "grapes", "cucumber"];
    typeof fruits; // returns a non-primitive type of "object".
    
    let raining = new Boolean(true);
    typeof raining; // this time, typeof does not return the primitive type "boolean" but an object type, because the variable "raining" was declared using a constructor function, and not declared literally like the above variable "carrot".
      
The typeof operator returns the data type in string format.

#### Instanceof Operator
The instanceof checks whether:
* An object belongs to a certain class or subclass (inherited class), or
* Is an instance of a constructor variable used to create it.

Either way, it comes down fundamentally to how the variables were declared, either *literally* or through a *constructor function*.

*Format: value instanceof type*.

    Eg: obj instanceof Class; // will return true if obj's class is Class or belongs to a class inherited from it. The return type of this operator is a boolean value.

The instanceof operator, other than typeof, can check and test object-based data types as well.

    Eg: const name = "Aaron";
    const age = 32;
    const hobbies = ["music", "skating", "formula one driving"];
      
    name instanceof String; // returns TRUE
    age instanceof Number; // returns TRUE
    hobbies instanceof Array; // returns TRUE as it recognizes hobbies as an instance of an Array Type.

The instanceof operator returns a boolean value of either true or false.

### Equality and Strict Equality Operators
Another common method for checking or comparing values and their data types in JavaScript is through the equality and strict equality operators and their NOT sibling operators.
* **Equality Operator (==)** - Checks to see if a value is EQUAL to another, regardless of data type.
* **Inequality Operator (!=)** - Checks to see if a value is NOT Equal to another, also regardless of data type.
* **Strict Equality Operator (===)** - Uses three equal sign symbols and checks if a value is STRICTLY EQUAL to another and are of the same type.
* **Strict Inequality Operator (!==)** - Checks to is a value is STRICT INEQUAL to another and are of the same type.

All four comparison operators return a boolean value of either true or false.

**Examples:**

    let x = 0 == ""; // true, type coerced.

Assigns the number zero and checks to see if zero is *equal* to the empty string. The operation returns true because the equality operator disregards the type of zero and the empty string. Both zero and an empty string are *falsey* values.

    let y = 0 === "" // false, type respected.

Assigns to y the number zero and checks to see if zero is *strictly equal* to an empty string. The comparison operation returns false because number is not the same type as a string.


## Notes
* All data types in JavaScript fall into one of two categories:
  * **Primitive Data Types** - Number, bigint, string, boolean, undefined and null.
  * **Object Data Types** - Objects, functions and arrays.
* Furthermore, primitive data types are also classified as **Atomic Values** whilst object data types are classified as **Compositive Values**.
* The main difference between primitive data types and object data types is that primitive data types are **immutable**, whilst object data types are **mutable**. Primitive data types are immutable in that once a value has been assigned to a variable, it does not change, even after new reassignments. The reassignments simply make *copies* of the original value. This is known as **passing variables by values**.
Object data types on the other hand can change the original value assigned and hence are mutable.
* Null and undefined are not **strictly** equal (===), however, they are loosely equal (==). This is because null is actualy an object (an error in the beginning implementations of JavaScript) when using the **typeof** operator, while undefined is a primitive data type.
* JavaScript has six **falsey** values, two of which are null and undefined. Any other value is considered **truthy**.
  * **0** - the number zero.
  * **""** - an empty string.
  * **Null** - empty data type.
  * **Undefined** - default undefined value.
  * **NaN** - not a number.
  * **False** - the false boolean value itself.
* JavaScript also has another primitive data type called **Symbols**. Symbols are essentially another type of object property keys (names); strings are usually the most common property key data type.
* Both the typeof and instanceof operators can also be used as methods: typeof() and instanceof().
