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
* **typeof** - use the typeof keyword before the name of the variable or a value you want to check. Eg: *typeof true* will return "boolean". The return type of this operator is a string.
* **instanceof** - instanceof checks whether an object belongs to a certain class or subclass (inherited class). Eg: *obj instanceof Class* will return true if obj's class is *Class* or belongs to a class inherited from it. The return type of this operator is a boolean value.

## Notes
* All data types in JavaScript fall into one of two categories:
  * **Primitive Data Types** - Number, bigint, string, boolean, undefined and null.
  * **Object Data Types** - Objects, functions and arrays.
* Furthermore, primitive data types are also classified as **Atomic Values** whilst object data types are classified as **Compositive Values**.
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
