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
      bar = new window.bar();
      bar[0]['id'] = source + 'Bar';
      body = document.getElementsByTagName('script')[0].parentNode;
      if (source == 'search') {
       body.insertBefore(bar[0], body.firstChild);
      }
      else if ( source == 'albums' ) { 
        bar.appendTo(body);
      };
    };
   
    // if div is empty float no space above then background no color
    if ( bar.children().length == 0 & 
      ( links[0].css('float') == 'right' |
      links[0].children('img[style="float:right;"]').length > 0 )) {
      links.unshift($('<a href="" style="color:' + bar.css("background-color") + ';">&nbsp;</a>'));
    };
    links.forEach(function (link) {
        bar.append(link);
        if (link != links[links.length-1] ) {
          bar.append(' '); 
        }; 
    })
  }
  
})(window);
