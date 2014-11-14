;(function(window, document, undefined) {

  if (typeof window.CB === "undefined") {
    window.CB = {};
  }
  if (typeof window.CB.Library === "undefined") {
    window.CB.Library = {};
  }

  // relative path from root of website
  window.CB.Library.REL_PATH = "/teachers/library";

  // rss parsing via google feed api
  window.CB.Library.parseRSS = function parseRSS(url, callback) {
    $.ajax({
      url: document.location.protocol + "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=" + encodeURIComponent(url),
      dataType: 'json',
      success: callback
    });
  };

  String.prototype.cbTruncate = function(n, useWordBoundary) {
    if (typeof useWordBoundary == "undefined") {
      useWordBoundary = true;
    }
    var tooLong = this.length > n;
    var s_ = tooLong ? this.substr(0, n - 1) : this;
    s_ = useWordBoundary && tooLong ? s_.substr(0, s_.lastIndexOf(" ")) : s_;
    return tooLong ? s_ + "&hellip;" : s_;
  };


  var monthMap = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // month index to short string
  window.CB.Library.getMonthString = function getMonthString(month) {
    return monthMap[month];
  }

})(window, document);