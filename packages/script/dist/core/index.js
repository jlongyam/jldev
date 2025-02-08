"use strict";

System.register(["./env.js", "./type.js", "./test.js"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_envJs) {
      _export("env", _envJs["default"]);
    }, function (_typeJs) {
      _export("type", _typeJs["default"]);
    }, function (_testJs) {
      _export("test", _testJs["default"]);
    }],
    execute: function execute() {}
  };
});