window.albums = function (callback) {
      
  var title = window.writing[0],
      topic = window.writing[1],   
      urls = {};

  var firstPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albums.json");
  var secondPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/ids.json");
   
  $.when(firstPromise, secondPromise).done(function(albums, ids) {         
    // [0] value, [1] success 
    currentAlbums = albums[0][topic][title];                
    Object.keys(currentAlbums).forEach(function (key) {
      // do something with obj[key]
      url = key.replace('{album}',currentAlbums[key]);
      id = ids[0][key];     
      if ( id ) {
        url = url.replace('{id}',id);
      }       
      urls[key] = url;
    }); 
    callback("albums", urls);   
  });

};

window.search = function (callback) {
    
  var title = window.writing[0],
      topic = window.writing[1],   
      urls = {};

  $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/search.json").done(function(search) {         
    // [0] value, [1] success 
    currentSearch = search[topic][title];                
    Object.keys(currentSearch).forEach(function (key) {
      // do something with obj[key]
      url = key.replace('{search}', currentSearch[key] == 'self' ? title : currentSearch[key]);
      urls[key] = url;
    }); 
    callback("search", urls);
  });  

};

window.createBar = function (source, urls) {
  $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/icons16x16.json").done(function(icons) {
    var on=window.writing[3];
    var bar = new window.bar();
    
    Object.keys(urls).forEach(function (key) {
      url = urls[key];               
      if ( !( on != 'local' & (key == 'https://plus.google.com/u/0/photos/{id}/albums/{album}' | key == 'https://www.facebook.com/{id}/media_set?set=a.{album}.100000433081467&type=3') ) ) { 
        // for exit from forEach loop is better some
        Object.keys(icons).some(function (iconKey) {
          repo = icons[iconKey];
          if ( $.inArray(key, repo) != -1 ) 
          {
            bar.append($('<a href="' + url + '">' + '<img src="' + iconKey + '" />' + '</a>'));
            bar.append(' '); 
            return true;
          }
        })  
      }                  
    })

    if ( bar.children().length > 0 ) {
      if (source == 'search') {
       bar.insertBefore(document.getElementsByTagName('script')[0].parentNode)
      }
      else if ( source == 'albums' ) { 
        bar.appendTo(document.getElementsByTagName('script')[0].parentNode)
      };
      //bar.append($('<a href="" style="color:' + '#E0E0E0' + ';">&bnsp;</a>'));
    }           
  })                 
};
