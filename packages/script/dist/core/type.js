"use strict";

System.register([], function (_export, _context) {
  "use strict";

  _export("default", function (t_input) {
    var s_type = Object.prototype.toString.call(t_input);
    return s_type.split(' ')[1].replace(']', '');
  });
  return {
    setters: [],
    execute: function execute() {}
  };
});