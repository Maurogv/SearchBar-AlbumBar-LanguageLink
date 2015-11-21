(function (window) {
  var bar = function (color) {
    color = typeof color !== 'undefined' ? color : "#E0E0E0";
    var div = $('<div style="background-color:' + color + '; margin-top : 10px; padding-left : 5px;"></div>');
    return div
  };
  window.bar = bar;
  
  window.toBar = function (source, links) {
    bar = $('#' + source + 'Bar');
    if ( bar.length == 0 ) {
      bar[0]['id'] = source + 'Bar';
      if (source == 'search') {
        bar.insertBefore(document.getElementsByTagName('script')[0].parentNode)
       }
      else if ( source == 'albums' ) { 
         bar.appendTo(document.getElementsByTagName('script')[0].parentNode)
      };
    };
     
    links.forEach(function (link) {
      bar.append(link);
      if (link != links[links.length-1] ) {
            bar.append(' '); 
      };
    })
  }
  
})(window);
