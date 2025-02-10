var polyfill = {};
//
polyfill.script = function() { return document.scripts[document.scripts.length-1] }
polyfill.path = polyfill.script().getAttribute('src').replace('include.js','dist/');
//
if(typeof Object.defineProperty !== 'function') document.write('<script src="'+polyfill.path+'Object/defineProperty.min.js"><\/script>');
if(!('keys' in Object)) document.write('<script src="'+polyfill.path+'Object/keys.min.js"><\/script>');
if(!('map' in Array.prototype)) document.write('<script src="'+polyfill.path+'Array/map.min.js"><\/script>');
if(!('indexOf' in Array.prototype)) document.write('<script src="'+polyfill.path+'Array/indexOf.min.js"><\/script>');
if(!('includes' in String.prototype)) document.write('<script src="'+polyfill.path+'String/includes.min.js"><\/script>');
if(typeof JSON !== 'object') document.write('<script src="'+polyfill.path+'JSON.min.js"><\/script>');
if(!('currentScript' in document)) document.write('<script src="'+polyfill.path+'document/currentScript.min.js"><\/script>');
if(!('head' in document)) document.write('<script src="'+polyfill.path+'document/head.min.js"><\/script>');
if(typeof Promise !== 'function') document.write('<script src="'+polyfill.path+'Promise.min.js"><\/script>');
if(typeof fetch !== 'function') document.write('<script src="'+polyfill.path+'fetch.min.js"><\/script>');
if(typeof console !== 'object') document.write('<script src="'+polyfill.path+'console.min.js"><\/script>');
