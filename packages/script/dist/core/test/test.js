"use strict";

System.register(["../test.js", "../type.js"], function (_export, _context) {
  "use strict";

  var test, type, result;
  return {
    setters: [function (_testJs) {
      test = _testJs["default"];
    }, function (_typeJs) {
      type = _typeJs["default"];
    }],
    execute: function execute() {
      result = [];
      result.push(test({
        call: function call() {
          return 0;
        },
        should: 0
      }));
      result.push(test({
        name: 'should false',
        call: function call() {
          return false;
        },
        should: false
      }));
      result.push(test({
        context: 'type(T)',
        name: 'type(0)',
        call: function call() {
          return type(0);
        },
        should: 'Number'
      }));
      console.table(result);
    }
  };
});