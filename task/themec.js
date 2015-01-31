(function() {
    var optimist = require("optimist")
        .usage("Usage:\n  compile_less [--pretty] <theme_name> <out_dir>\n\n" +
        "\tout_dir\t\t:\tOutput directory relative to cwd" +
        "\ttheme_name\t:\tName of theme (e.g. 'readable')\n"
        )
        .boolean("pretty")
        .describe("pretty", "Do not minify (no '.min' will be added)")
        ;

    var argv = optimist.argv;
    if (argv._.length != 2) {
        optimist.showHelp();
        process.exit(1);
    }

    var path = require("path");
    var fs = require("fs");

    var inputThemeName = argv._[1];
    var outputDirectoryName = argv._[0];
    var bootstrapFolderName = "_bootstrap";
    var outputFilePath = path.join(outputDirectoryName, argv["pretty"] ? "bootstrap.css" : "bootstrap.min.css");

    var lessBasePath = path.join(__dirname, "..", "less");
    var themeBasePath = path.join(lessBasePath, inputThemeName);
    var bootstrapBasePath = path.join(lessBasePath, bootstrapFolderName);

    var ENCODING = "utf8";

    var less = require("less");

    fs.readFile(path.join(lessBasePath, "theme.less"), ENCODING, function(err, data) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        less.render(data,
            {
                filename: "theme.less",
                paths: [themeBasePath, bootstrapBasePath],
                compress: !argv["pretty"]
            },
            function(err, data) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                fs.writeFile(outputFilePath, data.css, ENCODING, function(err) {
                    if (err) {
                        console.log(err);
                        process.exit(1);
                    }
                    process.exit(0);
                });
            }
        );
    });
})();