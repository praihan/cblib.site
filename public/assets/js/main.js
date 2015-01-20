;(function(window, document, undefined) {
  "use strict";
  
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
      $(this).find(".dropdown-menu").first().stop(false, false).slideDown(300);
    });
    $(".dropdown").on("hide.bs.dropdown", function(e) {
      // do what would have been done after the animation ends
      e.preventDefault();
      var $this = $(this);
      $this.find(".dropdown-menu").first().stop(false, false).slideUp(300, function() {
        $this.removeClass("open");
        $this.find(".dropdown-toggle").first().attr("aria-expanded", "false")
      });
    });
  });

  // smooth scroll for anchors
  $(function() {
    $("a[href^='#']").on("click", function(e) {
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
  });

  // back to top button
  $(function() {
    window.CB.Library.scrollToTop(".scroll-to-top", function() {
      window.location.hash = "";
    });
  });

})(window, document);
