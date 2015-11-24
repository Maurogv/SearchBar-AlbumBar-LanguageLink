window.albums = function (callback) {
  
  window.redirect(albumsJob);
  function albumsJob () {
    var urls = {},
        id;
  
    var firstPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albums.json");
    var secondPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/ids.json");
     
    $.when(firstPromise, secondPromise).done(function(albums, ids) {         
      // [0] value, [1] success 
      currentAlbums = albums[0][topic][title];                
      Object.keys(currentAlbums).forEach(function (key) {
        // do something with obj[key]
        var id;
        valueAlbum = currentAlbums[key]; 
        if ( valueAlbum.indexOf('{self}') !=-1 ) {
          valueAlbum = valueAlbum.replace('{self}', title.deleteUnWantedChars());
        }
        url = key.replace('{album}',valueAlbum);
        
        currentIds=ids[0];
        Object.keys(currentIds).some(function (idKey) {
          repo = currentIds[idKey];
          if ( $.inArray(key, repo) != -1 ) 
          {
            id = idKey; 
          }
          return id === idKey;
        })  
        if ( id ) {
          url = url.replace('{id}',id);
        }       
        urls[key] = url;
      }); 
      callback("albums", urls);   
    });
  }

};

window.search = function (callback) {
    
  window.redirect(searchJob);
  function searchJob () {
    var urls = {};
  
    $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/search.json").done(function(search) {         
      // [0] value, [1] success 
      currentSearch = search[topic][title];                
      Object.keys(currentSearch).forEach(function (key) {
        // do something with obj[key]
        if ( currentSearch[key].indexOf('{self}') !=-1 ) {
          currentTitle = title;
          if ( key == 'https://www.facebook.com/{search}?fref=ts' |
               key == 'https://www.instagram.com/{search}' |
               key == 'https://www.instagram.com/explore/tags/{search}' |
               key == 'https://twitter.com/{search}' ) {
            currentTitle = currentTitle.replace(/\s/g, '').toLowerCase();
          }
          valueSearch = currentSearch[key].replace('{self}', currentTitle);
        }
        else valueSearch = currentSearch[key];
  
        url = key.replace('{search}', valueSearch);
        urls[key] = url;
      }); 
      callback("search", urls);
    });  
  }

};

window.addToBar = function (source, urls) {
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

window.redirect = function (callback) {
  title = window.writing[0],
  enTitle = window.writing[0],
  topic = window.writing[1]; 

  $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/redirect.json").done(function(titles) {
    Object.keys(titles[topic]).forEach(function (key) {
      if ( titles[topic][key] == title ) {
        enTitle = key;
        return true;
      };
    })  
    title = titles[topic][title] || title;            
    callback();
  })
}

String.prototype.deleteUnWantedChars = function() {
  current = this.replace(/\w\S*/g, function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1);
            });
  current = current.replace(/[()-]/g,'').replace(/'/g,'');
  return current.replace(/\s/g, '');
}
