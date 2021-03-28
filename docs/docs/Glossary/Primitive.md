# Primitive

In [JavaScript](), a **primitive**(primitive value, primitive data type) is data that is not an [object]() and has no [method](). There are 7 primitive data types: [string](),[number](),[bigint](),[boolean](),[undefined](),[symbol](),[null]().

Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

All primitives are **immutable**, i.e. ,the cannot be altered.It is important not to confuse a primitive itself with a variable assigned a primitive value, Thee variable may be reassigned a new value, but thee existing value cannot be changed in the ways that objects, array, and functions can be altered.

## Example

This example will help you understand that primitive values are **immutable**.

```js
// Using a string method doesn't mutate the string
var bar = 'baz';
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// Using an array method mutates the array
var foo = [];
console.log(foo); // []
foo.push('plugh');
console.log(foo); // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase(); // BAZ
```

A primitive can be replaced, but it can't be directly altered.

## Primitive wrapper objects in JavaScript

Except for `null` and `undefined`, all primitive values have object equivalents that wrap around the primitive values:

- [String]() for the string primitive.
- [Number]() for the number primitive.
- [BigInt]() for the bigint primitive.
- [Boolean]() for the boolean primitive.
- [Symbol]() for the symbol primitive.

The wrapper's [valueOf]() method returns the primitive value.
