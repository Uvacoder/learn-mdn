# Window: DOMContentLoaded event

The `DOMContentLoaded` event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.



| Bubbles                | Yes                                                          |
| ---------------------- | ------------------------------------------------------------ |
| **Cancelable**         | Yes (although specified as a simple event that isn't cancelable) |
| **Interface**          | [Event](./Event)                                             |
| Event handler property | None                                                         |

The original target for this event is the [Document](./Document) that has loaded. You can listen for this event on the `Window` interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the Document: [`DOMContentLoaded`](./Document/DOMContentLoaded_event) event.

A different event, [`load`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event), should be used only to detect a fully-loaded page. It is a common mistake to use `load` where `DOMContentLoaded` would be more appropriate.

