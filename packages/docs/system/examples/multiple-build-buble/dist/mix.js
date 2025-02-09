System.register([], (function () {
  'use strict';
  return {
    execute: (function () {

      var num = {
        one: 'ONE',
        two: 'TWO'
      };

      var mix = num.one + ', ' + num.two;
      console.log(mix);

    })
  };
}));
