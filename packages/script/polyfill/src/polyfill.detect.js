if(typeof polyfill === 'undefined') polyfill = {}
polyfill.detect = {
  'global': { // browser and node
    console: (typeof Console === 'object'),
    Promise: (typeof Promise === 'function')
  }
  'document': {
    head: ('head' in document),
    currentScript: ('currentScript' in document)
  }
}