"use strict";

System.register(["../type.js"], function (_export, _context) {
  "use strict";

  var type;
  return {
    setters: [function (_typeJs) {
      type = _typeJs["default"];
    }],
    execute: function execute() {
      console.dir([type(null), type(undefined), type(false), type(0), type(''), type({}), type([])]);
    }
  };
});