var dive = require("dive");

var fsact = function() {
  this._actions = [];

  this.register = function(actionCallback, include, exclude) {
    this._actions.push([actionCallback, include, exclude]);
  }

  this.act = function(dir, options) {
    var _this = this;
    dive(dir, options || {}, function(err, file) {
      if (err) {
        console.log("fsact error: " + err);
        process.exit(1);
      }
      _this._actions.forEach(function(action) {
        if ((!action[1] || action[1].test(file)) && (!action[2] || (action[2].test(file) == false))) {
          action[0](file);
        }
      })
    })
  }
}

module.exports = function() {
  return new fsact();
}