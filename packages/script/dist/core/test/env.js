"use strict";

System.register(["../env.js"], function (_export, _context) {
  "use strict";

  var env;
  return {
    setters: [function (_envJs) {
      env = _envJs["default"];
    }],
    execute: function execute() {
      console.log(env);
    }
  };
});