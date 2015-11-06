(function (window) {
    var bar = function () {
            color = typeof color !== 'undefined' ? color : "#E0E0E0";
            var div= $('<div style="background-color:' + color + '; margin-top:10px"></div>');
            return div
    };
    window.bar=bar;
})(window);
