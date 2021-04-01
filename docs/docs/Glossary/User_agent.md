# User agent

A user agent is a computer program representing a person, for example, a [browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser) in a [Web](https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web) context.

Besides a browser, a user agent could be a bot scraping webpages, a download manager, or another app accessing the Web. Along with each request they make to the server, browsers include a self-identifying [`User-Agent`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) header called a user agent (UA) string. This string often identifies the browser, its version number, and its host operating system.

Spam bots, download managers, and some browsers often send a fake UA string to announce themselves as a different client. This is known as *user agent spoofing*.

The user agent string can be accessed with [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) on the client side using the [`NavigatorID.userAgent`](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent) property.

A typical user agent string looks like this: `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`. 