# `<use>`

`use`元素在SVG文档内取得目标节点，并在别的地方复制它们。它的效果等同于这些节点被深克隆到一个不可见的DOM中，然后将其粘贴到`use`元素的位置，很像HTML5中的克隆[模板元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)。因为克隆的节点是不可见的，所以当使用[CSS](https://developer.mozilla.org/en/CSS)样式化一个`use`元素以及它的隐藏的后代元素的时候，必须小心注意。隐藏的、克隆的DOM不能保证继承CSS属性，除非你明文设置使用[CSS继承](https://developer.mozilla.org/en/CSS/inheritance)。

出于安全原因，一些浏览器可能在use元素上应用同源策略，还有可能拒绝载入xlink:href属性内的跨源URI。