"use strict";

System.register(["./core/index.js"], function (_export, _context) {
  "use strict";

  var env, type, test;
  return {
    setters: [function (_coreIndexJs) {
      env = _coreIndexJs.env;
      type = _coreIndexJs.type;
      test = _coreIndexJs.test;
    }],
    execute: function execute() {
      // const result = [
      //   env,
      //   type(false),
      //   test({
      //     name: 'should 0',
      //     call: function() {
      //       return 0
      //     },
      //     should: 0
      //   })
      // ]
      // console.table(result)
      _export("default", {
        env: env,
        type: type,
        test: test
      });
    }
  };
});