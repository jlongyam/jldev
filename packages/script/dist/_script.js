"use strict";

System.register(["./core/index.js"], function (_export, _context) {
  "use strict";

  var env, type, test, result;
  return {
    setters: [function (_coreIndexJs) {
      env = _coreIndexJs.env;
      type = _coreIndexJs.type;
      test = _coreIndexJs.test;
    }],
    execute: function execute() {
      result = [env, type(false), test({
        name: 'should 0',
        call: function call() {
          return 0;
        },
        should: 0
      })];

      // var pre = window.document.getElementById('pre');
      console.log(result);
    }
  };
});