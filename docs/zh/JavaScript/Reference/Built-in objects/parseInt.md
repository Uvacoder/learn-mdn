# parseInt

**parseInt(string, radix)** 解析一个字符串并返回指定基数的十进制整数， `radix` 是 2-36 之间的整数，表示被解析字符串的基数。

## 语法

`parseInt(string, radix);`

### 参数

#### string

要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用 [ToString](http://www.ecma-international.org/ecma-262/6.0/#sec-tostring) 抽象操作)。<u>字符串开头的空白符将会被忽略</u>。

#### radix (可选)

从`2`到`36`, 表示字符串的基数.**<u>请注意, 10 不是默认值</u>**

### 返回值

从给定的字符串中解析出一个整数, 或 NaN, 当

- `radix`小于 2 或者大于 36, 或
- 第一个非空格字符不能转换成数字

## 描述

如果 radix 是 undefined、0 或未指定的，JavaScript 会假定以下情况：

- 如果输入的 string 以 `0x`或 `0X`开头，那么 radix 被假定为 16，字符串的其余部分被当做十六进制数去解析。
- 如果输入的 string 以 `0` 开头， radix 被假定为 8（八进制）或 10（十进制）。具体选择哪一个 radix 取决于实现。
- 如果输入的 string 以任何其他值开头， radix 是 10 (十进制)。

## [例子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt#%E4%BE%8B%E5%AD%90%EF%BC%9A%E4%BD%BF%E7%94%A8_parseInt)
