"use strict";

System.register(["./jsEnv.js"], function (_export, _context) {
  "use strict";

  var isBrowser, isNode;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); } //import * as jsEnv from 'browser-or-node'
  return {
    setters: [function (_jsEnvJs) {
      isBrowser = _jsEnvJs.isBrowser;
      isNode = _jsEnvJs.isNode;
    }],
    execute: function execute() {
      // - isWorker
      // - isJsDom
      // - isWebWorker
      // - isDeno
      // - isBun
      _export("default", {
        browser: isBrowser,
        node: isNode,
        nw: (typeof nw === "undefined" ? "undefined" : _typeof(nw)) === 'object'
      });
    }
  };
});