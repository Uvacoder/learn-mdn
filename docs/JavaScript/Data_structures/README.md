# JavaScript data types and data structures

Programing languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

## Dynamic typing

JavaScript is a `loosely typed` and `dynamic` language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned(and re-assigned) values of all types.

## Data and Structure types

The latest ECMAScript standard defines nine types:

- Six **Data Types** that are [primitives](../../docs/Glossary/Primitive), checked by [typeof](../../docs/Web/JavaScript/Reference/Operators/typeof) operator:
  - [undefined](../../docs/Glossary/undefined): `typeof instance === "undefined"`
  - [Boolean](../../docs/Glossary/Boolean): `typeof instance === "boolean"`
  - [Number](../../docs/Glossary/Number): `typeof instance === "number"`
  - [String](../../docs/Glossary/String): `typeof instance === "string"`
  - [BigInt](../../docs/Glossary/BigInt): `typeof instance === "bigint"`
  - [Symbol](../../docs/Glossary/Symbol): `typeof instance === "symbol"`
- **Structural Types**:
  - [Object](../../docs/Glossary/Object): `typeof instance === "object"`. Special non-data but **Structural type** for any [constructed]() object instance also used as data structures: new [Object](), new [](Array), new [Map](), new [Set](), new [WeakMap](), new [WeakSet](), new [Date]() and almost everything made with [new keyword]().
  - [Function](): a non-data structure, though it also answers for `typeof` operator: `typeof instance === "function"'. This is merely a special shorthand for Functions, through every Function constructor is derived from Object constructor.
- **Structural Root** Primitive:
  - [null](): `typeof instance === "object"`. Special [primitives](../../docs/Glossary/Primitive) type having additional usage for its value: if object is not inherited, the `null` is shown.
