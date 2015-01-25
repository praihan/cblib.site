


Colonel By Library
===

The official **git** repository for the Colonel By Library website.

***

###Table of Contents

* [Colonel By Library](#colonel-by-library)
	* [License](#license)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Deploying](#deploying)
    * [Contributing](#contributing)
    * [Issues](#issues)
    * [File Types](#file-types)
    * [Appending to PATH](#appending-to-path)
    * [Other Resources](#other-resources)

***

### License

This project is licensed under a zlib style license. You can find a copy of the terms in the [`COPYING`](COPYING) file.

***

### Installation

To ready your system for running the web-server, you are required to install the following dependencies.

* [nodejs](http://nodejs.org/) - the webserver is based on the node runtime engine for its modern features and scalability. You also need the `npm` executable. Make sure to [append to PATH](#appending-to-path) after installation. (NOTE: Linux users, check your vendor's repository for the most supported version. You might also need to get `npm` seperately)

After installing the above, you need to install the node-specific dependencies. For this part, you need to make sure you have [appended to PATH](#appending-to-path). Execute the following in the root directory of this repository.

	npm i

If you are on Linux, you might have to execute:

	sudo npm i
	
This command installs all the node dependencies in a new folder called `node_modules`.

***

### Usage

After you have installed all the dependencies including the node-specific ones, continue with the following. You will have to use the `node` command so make sure it is [appended to PATH](#appending-to-path).

NOTE: Linux users, sometimes the `node` command does not exist, in this case you will have to use `nodejs` instead. However if you wish to use simply `node`. You can do the following:

	sudo ln -s /usr/bin/nodejs /usr/bin/node

* Open a command prompt or terminal at the root directory of the repository and execute:

		node task/serve
		
	It should say that it is listening on port `80`. Now go to your browser and go to `localhost/teachers/library/`. If you are unsuccessful go to the next step. (NOTE: Linux users, you might need to use `sudo`).

* Firstly make sure all the dependencies installed correctly. If not you can try to host at a different port. You can do so like:

		node task/serve <port>

	`<port>` just represents a port number, choose one that is not `80` and try again. However this time you will have to specify the port in the URL. Try `localhost:<port>/teachers/library/` where `<port>` is the number you used. If you are still unsuccessful, seek assistance from the interwebs (namely stackoverflow) or someone who knows about this stuff (or try to figure it out yourself).

***

### Deploying

* Open a command prompt or terminal at the root directory of the repository and execute:

		node task/deploy
		
	If this completes successfully, then you will find a folder called `deploy` in the root folder. This folder is a clone of the `public` folder where all `html`, `css`, and `js` files are minified.

* Now you can create a server for the deployed version by executing:

		node task/serve-deploy
		
	This task follows behaves the same way as `task/serve` so check out the section in [Usage](#usage) on how to use it to its full extent or if you are having problems with it.

***

### Contributing

To make contributions, firstly fork this repository. There is a fork button somewhere on the GitHub repository page. You will see that there is a copy of this repository under your own GitHub account. Do stuff there, all the usual stuff like bug fixes or improvements. Then send a pull request and someone will review the code and merge it.

To change the main user styles, open `less/main.less.css` and make the appropriate changes. Then in the root folder, execute:

	node task/css

You can even change the entire Bootstrap theme! To do this, experiment with the usage of `task/themec`.

Make sure you also include your name information in both [`package.json`](package.json) and [`CONTRIBUTORS`](CONTRIBUTORS).

***

### Issues

Somewhere on the GitHub repository page, you will find a link to `Issues`. Click it, it's safe, I promise. Report anything that you feel is an issue: namely to report **bugs** and suggest **improvements**.

***

### File Types

This section will provide a reference to important file types and extensions in no particular order.

* [.js](http://en.wikipedia.org/wiki/JavaScript) - Javascript file (nodejs as well as client-side scripting)
* [.css](http://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Cascading Style Sheets for custom styling
* [.less\[.css\]](http://lesscss.org/) - CSS pre-processor to generate bulky CSS while still being easy to configure
* [.json](http://json.org/) - Javascript Object Notation file, used to store configurations or data
* [.md](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) - Markdown file (like this file)
* .gitkeep - Placeholder file because git ignores empty directories
* [.gitignore](https://help.github.com/articles/ignoring-files/) - Specifies what is ignored by git (can be overridden in subdirectories)
* [.html](http://en.wikipedia.org/wiki/HTML) - Hyper Text Markup Language file
* [.jp\[e\]g](http://www.jpeg.org/), [.png](http://en.wikipedia.org/wiki/Portable_Network_Graphics), [.gif](http://en.wikipedia.org/wiki/Graphics_Interchange_Format), [.svg](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics), [.ico](http://en.wikipedia.org/wiki/ICO_\(file_format\)) - Image files
* [.eot\[@\]](http://en.wikipedia.org/wiki/Embedded_OpenType), [.svg](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics), [.ttf](http://en.wikipedia.org/wiki/TrueType), [.otf](http://en.wikipedia.org/wiki/OpenType), [.woff](http://en.wikipedia.org/wiki/Web_Open_Font_Format)- Font files
* [.zip](http://filext.com/file-extension/ZIP) - ZIP archive
* [.psd](http://www.photoshop.com/) - Adobe Photoshop file
* [.txt](http://en.wikipedia.org/wiki/Text_file) - Plain Text file

***

### Appending to PATH

NOTE: Linux user, Linux programs usually automatically make themselves accessible from the terminal. Only continue reading if you face a problem with executing. You should not append to PATH on Linux but simply create a symbolic link (or symlink). Read more at the links provided below.

To append to `PATH` means being able to access all executables from the directory that is to be appended from the command line without having to specify the location of the executable. 

For example if you want to add `node.exe` on Windows,  navigate to the directory where the executable is installed and copy the path of the directory to your clipboard (NOTE: if the path is `C:\Program Files\nodejs\node.exe`, only copy `C:\Program Files\nodejs\`). On Windows you can append to `PATH` from the command line.

    setx PATH "%PATH%;C:\Program Files\nodejs\"

The newly set `PATH` will only take affect on newly opened command prompt. So the current command prompt will need to be closed and reopened.

Often, the executables of a program might be placed in a subdirectory named `bin`.

You can read more:

* [Windows](http://stackoverflow.com/questions/8358265/how-to-update-path-variable-permanently-from-cmd-windows)
* [Linux](http://stackoverflow.com/questions/1951742/how-to-symlink-a-file-in-linux)
* [Mac OS](http://stackoverflow.com/questions/22465332/setting-path-environmental-variables-in-osx-permanently)

***

### Other Resources

* [Sublime Text](http://www.sublimetext.com/)
* [Notepad++](http://notepad-plus-plus.org/)
* [nodejs Tutorial](http://nodejs.org/documentation/tutorials/)
* [Express Guide](http://expressjs.com/guide.html)
* [Google Chrome Developer Tools](https://developer.chrome.com/devtools)
* [Firebug for Firefox Debugging](http://getfirebug.com/)