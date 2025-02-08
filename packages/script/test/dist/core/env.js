const url = require('url');
const { System, applyImportMap, setBaseUrl } = require('systemjs');

// Setting base URL is optional - the default is to use process.cwd()
// so the code here is redundant
const basePath = url.pathToFileURL(process.cwd()).href;
setBaseUrl(System, basePath);

applyImportMap(System, {
  imports: {
    "env": "../../../dist/core/env.js"
  }
});

System.import('env').then((ns) => {
  
  console.log(ns);
});