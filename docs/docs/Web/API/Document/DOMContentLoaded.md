# Document: DOMContentLoaded event

Synchronous JavaScript pauses parsing of the DOM. If you want the DOM to get parsed as fast as possible after the user has requested the page, you can make your [JavaScript asynchronous](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) and [optimize loading of stylesheets](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery). If loaded as usual, stylesheets slow down DOM parsing as they're loaded in parallel, "stealing" traffic from the main HTML document.



## [Examples](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#examples)

### [Basic usage](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#basic_usage)

```
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
```

### [Delaying DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#delaying_domcontentloaded)

```
<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });

for( let i = 0; i < 1000000000; i++)
{} // This synchronous script is going to delay parsing of the DOM,
   // so the DOMContentLoaded event is going to launch later.
</script>
```

### [Checking whether loading is already complete](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#checking_whether_loading_is_already_complete)

`DOMContentLoaded` may fire before your script has a chance to run, so it is wise to check before adding a listener.

```
function doSomething() {
  console.info('DOM loaded');
}

if (document.readyState === 'loading') {  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', doSomething);
} else {  // `DOMContentLoaded` has already fired
  doSomething();
}
```