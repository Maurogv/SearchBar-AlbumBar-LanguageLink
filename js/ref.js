(function (window) {
    url='elenco';
    var references = function (url) {          
        $("my-ref").each(function (index) {
            $(this).text("");
            $(this).append("<a href='" + url + "#" + $(this).attr("name") + "'> [" + (index + 1) + "]</a>");
        });
    }

    window.I.references = references;

})(window);
