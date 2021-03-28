# Symbol

In [JavaScript](), Symbol is a [primitive value]().

A value having the data type Symbol can be referred to as a "Symbol value". In a JavaScript runtime environment, a symbol value is created by invoking the function Symbol, which dynamically produces an anonymous, unique value. A symbol may be used as an object property.

Symbol can have an optional description, but for debugging purposes only.

A Symbol value represents a unique identifier. For example:

```js
const foo = Symbol('test');
const bar = Symbol('test');
console.log(foo === bar); // false

const f = Symbol.for('test');
const b = Symbol.for('test');
console.log(f === b); // true
console.log(typeof f); // symbol
console.log(Symbol.keyFor(f)); // test
console.log(f instanceof Symbol); // false
```

## Symbols don't "Auto-Convert" to strings

`Uncaught TypeError: Cannot convert a Symbol value to a string`
