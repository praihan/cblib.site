;(function(window, document, undefined) {
  "use strict";

  // generate event snippets via rss
  $(function() {
    var $e = $("#ajax-spinner");
    window.CB.Library.parseRSS(document.location.protocol + "//colonelbylibrary.wordpress.com/feed/?nocache=" + new Date().getTime(), function(data) {
      $.each(data.feed.entries, function(key, value) {
        var $event = $("#recent-" + (key + 1));
        if ($event.length) {
          var publishDate = new Date(value.publishedDate);
          $event
            .append($("<h3/>", {"class": "evt-date"}).html(window.CB.Library.getMonthString(publishDate.getMonth()) + " " + publishDate.getDate() + ", " + publishDate.getFullYear()))
            .append($("<h2/>", {"class": "evt-title"})
              .append($("<a/>", {href: value.link}).html(value.title.cbTruncate(100))))
            .append($("<div/>", {"style": "-moz-box-shadow: 0 0 3px #ccc;-webkit-box-shadow: 0 0 3px #ccc;box-shadow: 0 0 3px #ccc; border:15px solid transparent;"})
              .append($("<p/>", {"class": "evt-content",}).html(value.content))
              .append($("<p/>"))
                .append($("<a/>", {"class": "btn btn-default evt-view-btn", href: value.link, role: "button"}).html("Read on <i>WordPress&#8480;</i> &raquo;")));
        }
      });
      $e.hide();
    }, function() {
      $e.show();
    });
  });

  // nano gallery
  $(function() {
    $("#gallery").nanoGallery({
      kind: "flickr",
      userID: "129159678@N02", // colonelbylibrary@yahoo.ca
      photoset: "72157649919607620",
      thumbnailWidth: 165,
      thumbnailHeight: 110,
      thumbnailHoverEffect: "labelSlideUp,borderLighter",
      thumbnailLazyLoad: true,
      viewerDisplayLogo: false,
      paginationMaxLinesPerPage: 1,
      thumbnailLabel: {display: true, align: "center"},
      theme: "clean",
      i18n: { thumbnailImageDescription: "view photo", thumbnailAlbumDescription: "open album" }
    });
  });

  // hide anyways when loaded
  $(window).load(function() {
    $("#ajax-spinner").hide();
  });

})(window, document);