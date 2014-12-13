;(function(undefined) {
	var csv = require("ya-csv");
  var fs = require("fs");
  var path = require("path");

  var reader = csv.createCsvFileReader(path.join(__dirname, "data.csv"));
  var skip = true;

  var stream = fs.createWriteStream(path.join(__dirname, "output.html"));
  stream.once('open', function(fd) {
    reader.addListener("data", function(data) {
      if (skip) {
        skip = false;
        return;
      }
      var link = data[0];
      var anchor = data[2];
      stream.write("<li><a href=\"" + link + "\" target=\"blank\">" + anchor + "</a></li>\n");
    });
    reader.addListener("end", function() {
      stream.end();
    });
  });
    

})();