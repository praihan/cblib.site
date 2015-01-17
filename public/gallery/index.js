;(function(window, document, undefined) {
  "use strict";

  // nano gallery
  $(function() {
    $("#gallery").nanoGallery({
      kind: "flickr",
      userID: "129159678@N02", // colonelbylibrary@yahoo.ca
      thumbnailWidth: 165,
      thumbnailHeight: 110,
      thumbnailHoverEffect: "labelSlideUp,borderLighter",
      thumbnailLazyLoad:true,
      viewerDisplayLogo:false,
      paginationMaxLinesPerPage: 3,
      thumbnailLabel: {display: true, align: "center"},
      theme: "clean",
      i18n: { thumbnailImageDescription: "view photo", thumbnailAlbumDescription: "open album" }
    });
  });

  // hide spinner
  $(window).load(function() {
    $("#ajax-spinner").hide();
  });

})(window, document);