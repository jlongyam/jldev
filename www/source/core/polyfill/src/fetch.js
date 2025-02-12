fetch = function (url, options) {
  options = options || {};
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    var keys = [];
    var headers = {};

    var response = function () { return ({
      ok: ((request.status / 100) | 0) == 2, // 200-299
      statusText: request.statusText,
      status: request.status,
      url: request.responseURL,
      text: function () { return Promise.resolve(request.responseText); },
      json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
      blob: function () { return Promise.resolve(new Blob([request.response])); },
      clone: response,
      headers: {
        keys: function () { return keys; },
        entries: function () { return keys.map(function (n) { return [n, request.getResponseHeader(n)]; }); },
        get: function (n) { return request.getResponseHeader(n); },
        has: function (n) { return request.getResponseHeader(n) != null; },
      },
    }); };

    request.open(options.method || "get", url, true);

    request.onload = function () {
      request
        .getAllResponseHeaders()
        .toLowerCase()
        .replace(/^(.+?):/gm, function (m, key) {
          headers[key] || keys.push((headers[key] = key));
        });
      resolve(response());
    };

    request.onerror = reject;

    request.withCredentials = options.credentials == "include";

    for (var i in options.headers) {
      request.setRequestHeader(i, options.headers[i]);
    }

    request.send(options.body || null);
  });
}
