Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
  if (this === void 0 || this === null) { throw TypeError(); }

  var t = Object(this);
  var len = t.length >>> 0;
  if (len === 0) { return -1; }

  var n = 0;
  if (arguments.length > 0) {
    n = Number(arguments[1]);
    if (isNaN(n)) {
      n = 0;
    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
      n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
  }

  if (n >= len) { return -1; }

  var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

  for (; k < len; k++) {
    if (k in t && t[k] === searchElement) {
      return k;
    }
  }
  return -1;
};
