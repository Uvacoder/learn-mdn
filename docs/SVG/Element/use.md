# `<use>`

The `<use>` element takes nodes from within the SVG document, and duplicates them somewhere else.

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
  <use href="#myCircle" x="10" fill="blue" />
  <use href="#myCircle" x="20" fill="white" stroke="red" />
  <!--
stroke="red" will be ignored here, as stroke was already set on myCircle.
Most attributes (except for x, y, width, height and (xlink:)href)
do not override those set in the ancestor.
That's why the circles have different x positions, but the same stroke value.
  -->
</svg>
```

The effect is the same as if the nodes were deeply cloned into a non-exposed DOM, then pasted where the use element is, much like cloned template elements in HTML5.

Most attributes on `use` do **not** override those already on the element referenced by `use`. (This differs from how CSS style attributes override those set 'earlier' in the cascade). **Only** the attributes `x`, `y`, `width`, `height` and `href` on the use element will override those set on the referenced element. However, any other attributes not set on the referenced element will be applied to the use element.

Since the cloned nodes are not exposed, care must be taken when using CSS to style a use element and its cloned descendants. CSS properties are not guaranteed to be inherited by the cloned DOM unless you explicitly request them using CSS inheritance.

For security reasons, browsers may apply the same-origin policy on `use` elements and may refuse to load a cross-origin URL in the `href` attribute. There is currently no defined way to set a cross-origin policy for `use` elements.

## Attribute

### href

The URL to an element/fragment that needs to be duplicated.

### x

The x coordinate of the use element.

### y

The y coordinate of the use element.

### width

The width of the use element.

### height

The height of the use element.

::: warning

Note: `width` and `height` have no effect on `use` elements, unless the element referenced has a <u>viewbox</u> - i.e. they only have an effect when `use` reefers to a `svg` or `symbol` element.

:::