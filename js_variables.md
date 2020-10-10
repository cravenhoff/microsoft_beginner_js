## JavaScript Variables

Variables in JavaScript are "storage containers" for holding different types of data, from simple values such as strings and numbers to complex data types in the form of functions and objects.

There are three different ways to create variables in JavaScript, each of which are handled differently.

### Var Keyword
The "var" keyword is the oldest and original method for variable creation. It has been in use since the initial days of JavaScript.

Following are three key things about the **var** keyword:
* Function scoped - Available within a function's scope
* Can be changes in scope - A mutable variable type.
* Available "before" declaration - Can be declared on line 10 but will still be available on line 1 within the function.

### Let Keyword
The "let" keyword is also used to declared variables and is a recent implementation of ES6. The let **let** keyword holds the following properties:
* Block scoped - Available only within the start and end curly braces of a block of code.
* Can be changed in scope.
* Available "after" declaration - unlike the var keyword, the variabled will only be available from line 10 onwards.

### Const Keyword
The "const" keyword is similar to the var and let keywords, however it differs significantly from these two variable declaration types as it creates permanent, unchangeable variables, that once declared cannot be changed afterwards.

Const stands for **Constant** Values and can only be assigned, and not reassigned, unlike var and let.

Following are three key characteristics of **const**:
* Block scope - similar to let.
* Cannot be changed - Const is an immutable variable type.
* Available "after" the declaration - similar to let.
