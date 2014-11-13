;(function(window, document, undefined) {
    $(document).ready(function() {
        $("#nav-toggle").collapse({
            toggle: false
        });
        $(document).on("click", function() {
            $("#nav-toggle").collapse("hide");
        });
    });
})(window, document);
