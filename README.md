# node-promise-wrapper

Wrap promise to get both error & result in same line of code. Saves time & code. Useful for `async` functions only.

**Usage:**

```
var wrapper = require("node-promise-wrapper");
var {error, result} = await wrapper("result", promise);
```

- error: Holds any error returned by the promise.
- result: Holds any result returned by the promise.  
`result` variable name must be same as wrapper value.

**Example:**

```
var testPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (Math.random() > 0.5) {
      resolve("success");
    } else {
      reject("error");
    }
  }, 2000); // wait for 2 seconds
});

(async function() {
  var wrapper = require("node-promise-wrapper");
  // testPromise can be any other promise like fs.read(); fs.write(); etc.
  var {error, result} = await wrapper("result", testPromise);
  console.log(error, result);
})();

```