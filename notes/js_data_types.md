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
