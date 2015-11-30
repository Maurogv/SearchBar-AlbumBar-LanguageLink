(function (window) {
  var bar = function (color) {
    color = typeof color !== 'undefined' ? color : "#E0E0E0";
    var div = $('<div style="background-color:' + color + ';"></div>');
    return div
  };
  window.bar = bar;
  
  window.addToBar = function (source, links) {
    bar = $('#' + source + 'Bar');
    if ( bar.length == 0 ) {
      bar = new window.bar();
      bar[0]['id'] = source + 'Bar';
      if (source == 'search') {
        body = document.getElementsByTagName('script')[0].parentNode;
        body.insertBefore(bar[0], body.firstChild);
      }
      else if ( source == 'albums' ) { 
        window.addBottom();
        div.prepend(bar);
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
  
  window.addBottom = function() {
    body = document.getElementsByTagName('script')[0].parentNode;
    div = $('#bottom');
    if ( div.length == 0 ) { 
      div = $('<div id="bottom" />');
      div.appendTo(body);
    };
  }
  
})(window);
