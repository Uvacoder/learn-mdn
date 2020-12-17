---
sidebarDepth: 1 # default 1, max 2
---

# AggregateError

> The AggregateError object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by Promise.any(), when all promises passed to it reject.

## Constructor

### AggregateError()

> Creates a new AggregateError object.

## Instance properties

### AggregateError.prototype.message

> Error message, defaults to "".

### AggregateError.prototype.name

> Error name, defaults to AggregateError.

## Examples

### Catching an AggregateError

```javascript
Promise.any([Promise.reject(new Error('some error'))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises were rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error at <anonymous>:2:18" ]
});
```

### Creating an AggregateError

```javascript
try {
  throw new AggregateError([new Error('some error')], 'Hello');
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error at <anonymous>:3:5" ]
}
```

## Specifications

[Promise.any](https://tc39.es/proposal-promise-any/#sec-aggregate-error-objects)

> [The definition of 'AggregateError' in that specification.](https://tc39.es/proposal-promise-any/#sec-aggregate-error-objects)
