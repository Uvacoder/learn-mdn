# AggregateError

## 语法

`new AggregateError(errors[, message])`

## 参数

### errors

错误的描述，默认为空。

### message

> 可选

AggregateError 错误的提示信息。

## 描述

> 一个 AggregateError 当需要由操作报告多个错误被抛出，例如通过 Promise.any()，在传递给它的所有 Promise 拒绝。

## 属性

### AggregateError.prototype

AggregateError 的原型

## 示例

### 捕获一个 AggregateError

```javascript
Promise.any([Promise.reject(new Error('some error'))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises were rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error at <anonymous>:2:18" ]
});
```

### 创建一个 AggregateError

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

## 规范

| Specification                                                                                        |    Status     |              Status |
| ---------------------------------------------------------------------------------------------------- | :-----------: | ------------------: |
| [ESNext Promise.any Proposal](https://tc39.es/proposal-promise-any/#sec-aggregate-error-constructor) | Stage 3 Draft | Initial definition. |

## 浏览器兼容性

## 相关链接

- [Error](./Javascript/Error/)
