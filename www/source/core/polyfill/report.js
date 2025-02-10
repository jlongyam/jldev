//
polyfill.data = {
  'Object.defineProperty': (typeof Object.defineProperty === 'function'),
  'Object.keys': ('keys' in Object),
  'Array.indexOf': ('indexOf' in Array.prototype),
  'Array.map': ('map' in Array.prototype),
  'String.includes': ('includes' in String.prototype),
  'JSON': (typeof JSON === 'object'),
  'document.currentScript': ('currentScript' in document),
  'document.head': ('head' in document),
  'Promise': (typeof Promise === 'function'),
  'fetch': (typeof self.fetch === 'function'),
  'console': (typeof console === 'object')
};
//
var pre = document.createElement('pre');
pre.innerHTML = "<h2>Has</h2>";
//
var s_script = [];
for(var i = 0; i < document.scripts.length; i++) {
  var s_src = document.scripts[i].getAttribute('src');
  s_src = s_src.replace('./','');
  s_src = s_src.replace('include.js','').replace('report.js','');
  s_src = s_src.split('/').pop();
  s_src = s_src.split('.')[0];
  if(s_src.length > 0) s_script.push(s_src)
}
//
var o_data = Object.keys(polyfill.data);
for(var i = 0; i < o_data.length; i++) {
  var s_data =  o_data[i]
  s_data = s_data.split('.').pop();
  if(s_script.indexOf(s_data) >= 0) {
    polyfill.data[o_data[i]] += ': <b style="color:red">loaded</b>';
  }

}
//
for(var i in polyfill.data) {
  pre.innerHTML += '* <b>'+i+'</b>: <u>'+String(polyfill.data[i])+'</u><br>';
}
document.body.appendChild(pre);
