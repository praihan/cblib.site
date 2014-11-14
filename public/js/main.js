;(function(window, document, undefined) {

  var COL_MD = "col-md-4"

  // generate event snippets via rss
  $(document).ready(function() {
    window.CB.Library.parseRSS(document.location.protocol + "//colonelbylibrary.wordpress.com/feed/?nocache=" + new Date().getTime(), function(data) {
      $.each(data.responseData.feed.entries, function(key, value) {
        var $events = $("#upcoming-events");
        var eventHref = window.CB.Library.REL_PATH + "/events/#event" + (key + 1);
        $events.addClass("row");
        $events
          .append($("<div/>", {class: COL_MD + " evt-container"})
            .append($("<h2/>", {class: "evt-title"})
              .append($("<a/>", {href: eventHref}).html(value.title)))// .html(value.title))
            .append($("<p/>", {class: "evt-content"}).html(value.contentSnippet + "..."))
            .append($("<p/>")
              .append($("<a/>", {class: "btn btn-default evt-view-btn", href: eventHref, role: "button"}).html("Read More &raquo;"))))
          .append($("<br/>"))
          .append($("<hr/>"));
      });
    });
  })

  // collapsable navbar
  $(document).ready(function() {
    $("#nav-toggle").collapse({
      toggle: false
    });
    $(document).on("click", function() {
      $("#nav-toggle").collapse("hide");
    });
  });

})(window, document);
