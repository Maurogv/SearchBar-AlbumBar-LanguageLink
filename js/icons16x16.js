window.icons = function (source, urls) {
  $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/icons16x16.json").done(function(icons) {
    var on = window.writing[3],
        links = [];
    
    Object.keys(urls).forEach(function (key) {
      url = urls[key];               
      if ( !( on != 'local' & 
            ( key == 'https://plus.google.com/u/0/photos/{id}/albums/{album}' |
              key == 'https://picasaweb.google.com/{id}/{album}' |
              key == 'https://www.facebook.com/{id}/media_set?set=a.{album}.100000433081467&type=3' )) ) { 
        // for exit from forEach loop is better some
        var found;
        Object.keys(icons).some(function (iconKey) {
          repo = icons[iconKey];
          if ( $.inArray(key, repo) != -1 ) 
          {
            links.push($('<a href="' + url + '">' + '<img src="' + iconKey + '" />' + '</a>'));
            found = true;
          }
          return found;
        })  
      }                  
    })

    if ( links ) {
        window.toBar(source, links);
    }; 
  })                 
};
