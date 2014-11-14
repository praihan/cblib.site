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

})(window, document);