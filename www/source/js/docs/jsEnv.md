# Browser or Node.js

Check in which environment the code is running - browser/node.js/webworker/jsdom/deno.

## Install

```
$ npm install --save browser-or-node
```

## Usage

Import the checks and use it in your code. Works with both ESM and CJS imports.

```js
import * as jsEnv from "browser-or-node";
// import { isBrowser, isNode, isWebWorker, isJsDom, isDeno, isBun } from "browser-or-node";
// const jsEnv = require("browser-or-node");

if (jsEnv.isBrowser) {
  // do browser only stuff
}

if (jsEnv.isNode) {
  // do node.js only stuff
}

if (jsEnv.isWebWorker) {
  // do web worker only stuff
}

if (jsEnv.isJsDom) {
  // do jsdom only stuff
}

if (jsEnv.isDeno) {
  // do deno only stuff
}

if (jsEnv.isBun) {
  // do bun only stuff
}
```

## License

MIT © Dinesh Pandiyan
