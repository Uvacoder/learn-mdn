# \<img\>: The Image Embed element

## Image loading errors
If an error occurs while loading or rendering an image, and an [onerror](../Global_attributes#attr-onerror) event handler has been set on the [error](./error_event.md) event, that event handler will get called. This can happen in a number of situations, including:

- The src attribute is empty (`""`) or `null`.
- The src [URL](../../../Glossary/URL.md) is the same as the URL of the page the user is currently on.
- The image is corrupted in some way that prevents it from being loaded.
- The image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, and no dimensions were specified in the \<img\> element's attributes.
- The image is in a format not supported by the [user agent](../../../Glossary/User_agent.md).

## [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes)

This element includes the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

- **`alt`**

  Defines an alternative text description of the image.

