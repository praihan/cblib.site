;(function(window, document, undefined) {
  "use strict";

  // use flickr api
  $(window).load(function() {
    $.ajax({
      url: "https://api.flickr.com/services/rest/",
      data: {
        format: "json",
        method: "flickr.interestingness.getList",
        api_key: "7617adae70159d09ba78cfec73c13be3"
        // api_key: "3a4d3635601abdfd64f1d50a4fd6bc87"
      },
      dataType: "jsonp",
      jsonp: "jsoncallback"
    }).done(function (result) {
      var linksContainer = $("#images");
      // Add the demo images as links with thumbnails to the page:
      $.each(result.photos.photo, function (index, photo) {
        var baseUrl = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret;
        $("<a/>")
          .append($("<img>").prop("src", baseUrl + "_s.jpg"))
          .prop("href", baseUrl + "_b.jpg")
          .prop("title", photo.title)
          .attr("data-gallery", "")
          .appendTo(linksContainer);
      });
    });
  });

  $("#start-gallery-button").on("click", function(event) {
    event.preventDefault();
    blueimp.Gallery($("#images a"), {
      container: "#blueimp-gallery-carousel",
      carousel: true,
      urlProperty: "href"
    });
    // blueimp.Gallery($("#images a"), {
      // container: "#blueimp-gallery",
      // carousel: true
    // });
  });

  // news via rss
  $(function() {
    $("#ajax-spinner").hide();
  });

})(window, document);