System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      /*
        browser-or-node
        https://github.com/flexdinesh/browser-or-node
      */
      // src/index.ts
      var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
      var isNode = (
        // @ts-expect-error
        typeof process !== "undefined" && // @ts-expect-error
        process.versions != null && // @ts-expect-error
        process.versions.node != null
      );
      typeof window !== "undefined" && window.name === "nodejs" || typeof navigator !== "undefined" && "userAgent" in navigator && typeof navigator.userAgent === "string" && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));
      (
        // @ts-expect-error
        typeof Deno !== "undefined" && // @ts-expect-error
        typeof Deno.version !== "undefined" && // @ts-expect-error
        typeof Deno.version.deno !== "undefined"
      );
      typeof process !== "undefined" && process.versions != null && process.versions.bun != null;

      //import * as jsEnv from 'browser-or-node'
      // - isWorker
      // - isJsDom
      // - isWebWorker
      // - isDeno
      // - isBun
      var env = {
        browser: isBrowser,
        node: isNode,
        nw: (typeof nw === 'object')
      };

      function type (t_input) {
      	var s_type = Object.prototype.toString.call(t_input);
      	return s_type.split(' ')[1].replace(']','')
      }

      function test(option) {
        var config = {
          context: option.context || false,
          name: option.name || false,
          call: option.call ? option.call() : 0,
          should: type(option.should) === 'Boolean' ? String(option.should) : option.should || '0'
        },
        result = {};
        
        if(config.context) { result.context = config.context; }
        if(config.name) { result.test = config.name; }
        result.should = config.should;
        result.pass = ( String(config.should) === String(config.call) );
        
        return result
      }

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
      var script = exports("default", {
        env: env,
        type: type,
        test: test
      });

    })
  };
}));
