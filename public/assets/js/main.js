;(function(window, document, undefined) {

  var COL_MD = "col-md-4"

  // generate event snippets via rss
  $(function() {
    window.CB.Library.parseRSS(document.location.protocol + "//colonelbylibrary.wordpress.com/feed/?nocache=" + new Date().getTime(), function(data) {
      $.each(data.responseData.feed.entries, function(key, value) {
        var $events = $("#upcoming-events");
        var eventHref = window.CB.Library.REL_PATH + "/news/#event" + (key + 1);
        var publishDate = new Date(value.publishedDate);
        $events.addClass("row");
        $events
          .append($("<div/>", {class: COL_MD + " evt-container"})
            .append($("<h3/>", {class: "evt-date"}).html(window.CB.Library.getMonthString(publishDate.getMonth()) + " " + publishDate.getDate()))
            .append($("<h2/>", {class: "evt-title"})
              .append($("<a/>", {href: eventHref}).html(value.title.cbTruncate(40))))
            .append($("<p/>", {class: "evt-content"}).html(value.contentSnippet + "..."))
            .append($("<p/>")
              .append($("<a/>", {class: "btn btn-default evt-view-btn", href: eventHref, role: "button"}).html("Read More &raquo;"))))
          .append($("<br/>", {class: "evt-break"}))
          .append($("<hr/>", {class: "evt-break"}));
      });
    });
  })

  // collapsable navbar
  $(function() {
    $("#nav-toggle").collapse({
      toggle: false
    });
    $(document).on("click", function() {
      $("#nav-toggle").collapse("hide");
    });
  });

  // dropdown animation
  $(function() {
    $(".dropdown").on("show.bs.dropdown", function(e) {
      $(this).find(".dropdown-menu").first().stop(false, false).slideDown(500);
    });
    $(".dropdown").on("hide.bs.dropdown", function(e) {
      // do what would have been done after the animation ends
      e.preventDefault();
      var $this = $(this);
      $this.find(".dropdown-menu").first().stop(false, false).slideUp(500, function() {
        $this.removeClass("open");
        $this.find(".dropdown-toggle").first().attr("aria-expanded", "false")
      });
    });
  })

  // smooth scroll for anchors
  $(function() {
    $("a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
      var offset = $(this.hash).offset();
      if (typeof offset !== "undefined") {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
          },
          500,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  })

  // contact form validation
  $(function() {
    $("input,textarea").jqBootstrapValidation();
  });

  // back to top button
  $(function() {
    window.CB.Library.scrollToTop(".scroll-to-top");
  });

})(window, document);
