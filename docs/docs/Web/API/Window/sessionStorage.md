# Window.sessionStorage

The read-only `sessionStorage` property accesses a session [Storage](./Storage.md) object for the current origin. sessionStorage is similar to [localStorage](./localStorage.md); the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.

- Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab. That page session is valid only for that particular tab.
- A page session lasts as long as the tab or the browser is open, and survives over page reloads and restores.
- **Opening a page in a new tab or window creates a new session with the value of the top-level browsing context, which differs from how session cookies work**.
- Opening multiple tabs/windows with the same URL creates sessionStorage for each tab/window.
- Closing a tab/window ends the session and clears objects in sessionStorage.

Data stored in sessionStorage is specific to the protocol of the page. In particular, data stored by a script on a site accessed with HTTP (e.g., http://example.com) is put in a different sessionStorage object from the same site accessed with HTTPS (e.g., https://example.com).

The keys and the values are _always_ in the UTF-16 [DOMString](../DOMString.md) format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings.

## Syntax

```js
myStorage = window.sessionStorage;
```

## Value

A Storage object which can be used to access the current origin's session storage space.

## Exceptions

### SecurityError

The request violates a policy decision, or the origin is not a valid scheme/host/port tuple (this can happen if the origin uses the file: or data: scheme, for example). For example, the user may have their browser configured to deny permission to persist data for the specified origin.
