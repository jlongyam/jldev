"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var isBrowser, isNode, isWebWorker, isJsDom, isDeno, isBun;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  return {
    setters: [],
    execute: function execute() {
      /*
        browser-or-node
        https://github.com/flexdinesh/browser-or-node
      */
      // src/index.ts
      _export("isBrowser", isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined");
      _export("isNode", isNode =
      // @ts-expect-error
      typeof process !== "undefined" &&
      // @ts-expect-error
      process.versions != null &&
      // @ts-expect-error
      process.versions.node != null);
      _export("isWebWorker", isWebWorker = (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope");
      _export("isJsDom", isJsDom = typeof window !== "undefined" && window.name === "nodejs" || typeof navigator !== "undefined" && "userAgent" in navigator && typeof navigator.userAgent === "string" && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")));
      _export("isDeno", isDeno =
      // @ts-expect-error
      typeof Deno !== "undefined" &&
      // @ts-expect-error
      typeof Deno.version !== "undefined" &&
      // @ts-expect-error
      typeof Deno.version.deno !== "undefined");
      _export("isBun", isBun = typeof process !== "undefined" && process.versions != null && process.versions.bun != null);
    }
  };
});