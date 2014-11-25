;(function(window, document, undefined) {
  var COL_MD = "col-md-4"
  // generate event snippets via rss
  $(function() {
    var $e = $("#ajax-spinner");
    window.CB.Library.parseRSS(document.location.protocol + "//colonelbylibrary.wordpress.com/feed/?nocache=" + new Date().getTime(), function(data) {
      $.each(data.responseData.feed.entries, function(key, value) {
        var $event = $("#upcoming-event-" + (key + 1));
        var eventHref = window.CB.Library.REL_PATH + "/news/#event" + (key + 1);
        var publishDate = new Date(value.publishedDate);
        $event
          .append($("<h3/>", {"class": "evt-date"}).html(window.CB.Library.getMonthString(publishDate.getMonth()) + " " + publishDate.getDate()))
          .append($("<h2/>", {"class": "evt-title"})
            .append($("<a/>", {href: eventHref}).html(value.title.cbTruncate(40))))
          .append($("<p/>", {"class": "evt-content"}).html(value.contentSnippet + "..."))
          .append($("<p/>")
            .append($("<a/>", {"class": "btn btn-default evt-view-btn", href: eventHref, role: "button"}).html("Read More &raquo;")))
          .append($("<br/>", {"class": "evt-break"}))
          .append($("<hr/>", {"class": "evt-break"}));
      });
      $e.hide();
    }, function() {
      $e.show();
    });
  })

  // contact form validation
  $(function() {
    $("input,textarea").jqBootstrapValidation();
  });
})(window, document);