var path = require("path");
var fs = require("fs");
var wrench = require("wrench");
var minifyhtml = require("html-minifier").minify;
var minifyjscss = require("node-minify").minify;
var fsact = require("./lib/fsact.js");


var root = path.join(__dirname, "..");
var DEPLOY = "deploy"
var ENCODING = "utf8";

wrench.copyDirSyncRecursive(path.join(root, "public"), path.join(root, DEPLOY), {
  forceDelete: true,
  preserveFiles: false
});


var walker = fsact();

// html
walker.register(function(file) {
  fs.readFile(file, ENCODING, function(err, data) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    
    var min = minifyhtml(data, {
      removeAttributeQuotes: true,
      minifyJS: true,
      minifyCSS: true,
      collapseWhitespace: true
    });
    fs.writeFile(file, min, ENCODING, function(err) {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    });
    
  });
}, /.html$/);

// js
walker.register(function(file) {
  new minifyjscss({
    type: "uglifyjs",
    fileIn: file,
    fileOut: file,
    callback : function(err, min) {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    }
  });
}, /.js$/);

// css
walker.register(function(file) {
  new minifyjscss({
    type: "yui-css",
    fileIn: file,
    fileOut: file,
    callback : function(err, min) {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    }
  });
}, /.css$/);

walker.act(path.join(root, DEPLOY));