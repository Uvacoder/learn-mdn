# Nullish coalescing operator (??)

The **nullish coalescing operator (`??`)** is a logical operator that returns its right-hand side operand when its left-hand side operand is [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) or [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), and otherwise returns its left-hand side operand.

This can be contrasted with the [logical OR (`||`) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR), which returns the right-hand side operand if the left operand is *any* [falsy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#description)*[ ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#description)*value, not only `null` or `undefined`. In other words, if you use `||` to provide some default value to another variable `foo`, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., `''` or `0`). 

The nullish coalescing operator has the fifth-lowest [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), directly lower than `||` and directly higher than the [conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

