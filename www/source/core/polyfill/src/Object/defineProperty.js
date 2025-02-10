Object.defineProperty = function(o, name, prop) {
  o[name] = prop.get();
}