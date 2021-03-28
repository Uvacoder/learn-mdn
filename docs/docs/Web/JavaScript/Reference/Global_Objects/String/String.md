# String() constructor

The `String` constructor is used to create a new [String](./README.md) object. When called instead as a function, it performs type conversion to a [primitive string](), which is usually more useful.

## Syntax

```js
new String(thing);
String(thing);
```

## Parameters

### thing

Anything to be converted to a string.

## Examples

String constructor and String function

```js
typeof String('Hello world'); // string
typeof new String('Hello world'); // object
```

Here, the function produces a string (the primitive type) as promised. However, the constructor produces an instance of the type String (an object wrapper) and that's why you rarely want to use the String constructor at all.
