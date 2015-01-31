(function() {
    var exec = require("exec");
    var path = require("path");
    var os = require("os");

    exec([(os.platform() === 'win32') ? "node" : "nodejs", path.join(__dirname , "cssc"), "main", path.join(__dirname, "..", "public/assets/css")], function(err, out, code) {
        if (err instanceof Error)
            throw err;
        process.stderr.write(err);
        process.stdout.write(out);
        process.exit(code);
    });
})()