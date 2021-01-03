# Number.prototype.toExponential()

[[toc]]

## 概述

该方法以`指数表示法`返回该数值字符串表示形式

## 语法

```js
numObj.toExponential(fractionDigits);
```

### 参数

#### fractionDigits

可选.一个整数,用来指定小数点后有几位数字.默认情况下用尽可能多的位数来显示数字

:::warning
传小数也不报错

```js
(1).toExponential(1.9);
// "1.0e+0"
```

:::

#### 返回值

一个用幂的形式(科学计数法)来表示`Number`对象的字符串.小数点后以 fractionDigits 提供的值来四舍五入.如果 fractionDigits 参数被忽略了,小数点后的将尽可能用最多的位数来表示该数值

对数值字面量使用 toExponential()方法,且该数值没有小数点和指数是, 应该在该数值与该方法之间隔开一个空格,以避免点号被解释为一个小数点.也可以使用两个点号调用该方法

如果一个数值的小数位数多于 fractionDigits 参数所提供的,则该数值将会在 fractionDigits 指定的小数位数处四舍五入.

### 异常

#### RangeError

如果 fractionDigits 太小或者太大将抛出该错误.介于 0 和 20(包括 20)之前的值不会引起 RangerError.执行环境也可以支持更大或更小范围.

:::warning
经验证, 这里应该是 `0-100`

```js
VM777:1 Uncaught RangeError: toExponential() argument must be between 0 and 100
    at Number.toExponential (<anonymous>)
    at <anonymous>:1:4
```

:::

#### TypeError

如果该方法在一个非数值类型对象上调用.
