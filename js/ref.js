(function (window) {

    var addReferences = function (url) {          
        $("my-ref").each(function (index) {
            $(this).attr("id", "cite_ref-" + (index + 1));
            $(this).text("");
            $(this).append("<a href='" + url + $(this).attr("name") + "'> [" + (index + 1) + "]</a>");
        });
    }

    window.I.addReferences = addReferences;

})(window);
