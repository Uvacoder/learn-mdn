# GlobalEventHandlers.onload

The onload property of the [GlobalEventHandlers](../GlobalEventHandlers.md) mixin is an EventHandler that processes load events on a [Window](../Window), [XMLHttpRequest](../XMLHttpRequest.md), [\<img\>](../HTML/Element/img.md) element, etc.

The `load` event fires when a given resource has loaded.

## Syntax

```js
target.onload = functionRef;
```

### Value

`functionRef` is the handler function to be called when the window’s `load` event fires.

## Notes

The `load` event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading.

There are also [DOM Events](../Events) like `DOMContentLoaded` and `DOMFrameContentLoaded` (which can be handled using [EventTarget.addEventListener()](../EventTarget/addEventListener.md) which are fired after the DOM for the page has been constructed, but do not wait for other resources to finish loading.
