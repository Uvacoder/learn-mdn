# ::marker

The **`::marker`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to `display: list-item`, such as the [\<li\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and [\<summary\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) elements.

```
::marker {
  color: blue;
  font-size: 1.2em;
}
```

## [Allowable properties](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker#allowable_properties)

Only certain CSS properties can be used in a rule with `::marker` as a selector:

- All [font properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts)
- The [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) property
- [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [`text-combine-upright`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright), [`unicode-bidi`](https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi) and [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction) properties
- The [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content) property
- All [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations#css_properties) and [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions#properties) properties

> The specification states that additional CSS properties may be supported in future.

## [Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker#syntax)

```
::marker
```