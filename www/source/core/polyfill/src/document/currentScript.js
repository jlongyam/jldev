Object.defineProperty(document, 'currentScript', {
  get: function() {
    var d = document, l = d.scripts.length;
    return d.scripts[l-1]
  }
})
