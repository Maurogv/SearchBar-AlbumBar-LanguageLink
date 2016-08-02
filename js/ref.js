window.references = function () {          
    $("my-ref").each(function (index) {
        $(this).attr("id", "cite_ref-" + (index + 1));
        $(this).text("");
        $(this).append("<a href=#cite_note-" + (index + 1) + "> [" + (index + 1) + "]</a>");
    });
    //  <li id="cite_note-1"><a href="#cite_ref-1"><b>^</b></a> Cite Note-1</li>
    $(".references li").each(function (index) {
        $(this).attr("id", "cite_note-" + (index + 1));
        $(this).prepend("<a href=#cite_ref-" + (index + 1) + "><b>^</b></a> ");
    });
}
