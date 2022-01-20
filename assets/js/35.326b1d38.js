(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{400:function(e,n,t){"use strict";t.r(n);var a=t(25),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"document-domcontentloaded-event"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#document-domcontentloaded-event"}},[e._v("#")]),e._v(" Document: DOMContentLoaded event")]),e._v(" "),t("p",[e._v("Synchronous JavaScript pauses parsing of the DOM. If you want the DOM to get parsed as fast as possible after the user has requested the page, you can make your "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript asynchronous"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery",target:"_blank",rel:"noopener noreferrer"}},[e._v("optimize loading of stylesheets"),t("OutboundLink")],1),e._v('. If loaded as usual, stylesheets slow down DOM parsing as they\'re loaded in parallel, "stealing" traffic from the main HTML document.')]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("Examples"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"basic-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#basic_usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Basic usage"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("document.addEventListener('DOMContentLoaded', (event) => {\n    console.log('DOM fully loaded and parsed');\n});\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h3",{attrs:{id:"delaying-domcontentloaded"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delaying-domcontentloaded"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#delaying_domcontentloaded",target:"_blank",rel:"noopener noreferrer"}},[e._v("Delaying DOMContentLoaded"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<script>\n  document.addEventListener('DOMContentLoaded', (event) => {\n    console.log('DOM fully loaded and parsed');\n  });\n\nfor( let i = 0; i < 1000000000; i++)\n{} // This synchronous script is going to delay parsing of the DOM,\n   // so the DOMContentLoaded event is going to launch later.\n<\/script>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h3",{attrs:{id:"checking-whether-loading-is-already-complete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checking-whether-loading-is-already-complete"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#checking_whether_loading_is_already_complete",target:"_blank",rel:"noopener noreferrer"}},[e._v("Checking whether loading is already complete"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("code",[e._v("DOMContentLoaded")]),e._v(" may fire before your script has a chance to run, so it is wise to check before adding a listener.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function doSomething() {\n  console.info('DOM loaded');\n}\n\nif (document.readyState === 'loading') {  // Loading hasn't finished yet\n  document.addEventListener('DOMContentLoaded', doSomething);\n} else {  // `DOMContentLoaded` has already fired\n  doSomething();\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])])])}),[],!1,null,null,null);n.default=s.exports}}]);