(function() {
    var path = require("path");
    var express = require("express");
    var DEPLOY = "deploy";

    var app = express();

    app.use("/teachers/library", express.static(path.join(__dirname, "..", DEPLOY)));

    var port = process.argv[2] ? process.argv[2] : 80;

    app.listen(port);
    console.log("Listening on port '" + port + "'...");
})();