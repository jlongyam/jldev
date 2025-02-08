"use strict";

System.register(["./type.js"], function (_export, _context) {
  "use strict";

  var type;
  _export("default", function (option) {
    var config = {
        context: option.context || false,
        name: option.name || false,
        call: option.call ? option.call() : 0,
        should: type(option.should) === 'Boolean' ? String(option.should) : option.should || '0'
      },
      result = {};
    if (config.context) result.context = config.context;
    if (config.name) result.test = config.name;
    result.should = config.should;
    result.pass = String(config.should) === String(config.call);
    return result;
  });
  return {
    setters: [function (_typeJs) {
      type = _typeJs["default"];
    }],
    execute: function execute() {}
  };
});