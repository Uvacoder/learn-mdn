(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{438:function(t,a,s){"use strict";s.r(a);var r=s(25),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"number-prototype-toexponential"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number-prototype-toexponential"}},[t._v("#")]),t._v(" Number.prototype.toExponential()")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#概述"}},[t._v("概述")])]),s("li",[s("a",{attrs:{href:"#语法"}},[t._v("语法")]),s("ul",[s("li",[s("a",{attrs:{href:"#参数"}},[t._v("参数")])]),s("li",[s("a",{attrs:{href:"#异常"}},[t._v("异常")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("该方法以"),s("code",[t._v("指数表示法")]),t._v("返回该数值字符串表示形式")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("numObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toExponential")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fractionDigits"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("h4",{attrs:{id:"fractiondigits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fractiondigits"}},[t._v("#")]),t._v(" fractionDigits")]),t._v(" "),s("p",[t._v("可选.一个整数,用来指定小数点后有几位数字.默认情况下用尽可能多的位数来显示数字")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("传小数也不报错")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toExponential")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1.0e+0"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("h4",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),s("p",[t._v("一个用幂的形式(科学计数法)来表示"),s("code",[t._v("Number")]),t._v("对象的字符串.小数点后以 fractionDigits 提供的值来四舍五入.如果 fractionDigits 参数被忽略了,小数点后的将尽可能用最多的位数来表示该数值")]),t._v(" "),s("p",[t._v("对数值字面量使用 toExponential()方法,且该数值没有小数点和指数是, 应该在该数值与该方法之间隔开一个空格,以避免点号被解释为一个小数点.也可以使用两个点号调用该方法")]),t._v(" "),s("p",[t._v("如果一个数值的小数位数多于 fractionDigits 参数所提供的,则该数值将会在 fractionDigits 指定的小数位数处四舍五入.")]),t._v(" "),s("h3",{attrs:{id:"异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),s("h4",{attrs:{id:"rangeerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rangeerror"}},[t._v("#")]),t._v(" RangeError")]),t._v(" "),s("p",[t._v("如果 fractionDigits 太小或者太大将抛出该错误.介于 0 和 20(包括 20)之前的值不会引起 RangerError.执行环境也可以支持更大或更小范围.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("经验证, 这里应该是 "),s("code",[t._v("0-100")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VM777")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" Uncaught RangeError"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toExponential")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" argument must be between "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" and "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    at Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toExponential")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("anonymous"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("anonymous"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("h4",{attrs:{id:"typeerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeerror"}},[t._v("#")]),t._v(" TypeError")]),t._v(" "),s("p",[t._v("如果该方法在一个非数值类型对象上调用.")])])}),[],!1,null,null,null);a.default=n.exports}}]);