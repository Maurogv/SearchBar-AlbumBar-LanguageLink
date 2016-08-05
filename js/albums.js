window.albums = function (callback) {
  lang = window.writing[2];     
  if ( lang == 'it') {
    albumsJob ();
  }
  else if ( lang == 'en') {
     window.redirect(albumsJob);
  }
  
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
        if  ( key != 'https://onedrive.live.com/?v=photos&id=root&cid={id}&qt=allmyphotos&tagFilter={album}' )
        {
          if ( valueAlbum.indexOf('{self}') != -1 ) 
          {
            valueAlbum = valueAlbum.replace('{self}', title.deleteUnWantedChars().replace(/-/g, ''));
          }
          valueAlbum = valueAlbum.deleteUnWantedChars()
        }
        else if ( valueAlbum.indexOf('{self}') != -1 ) 
        {
          valueAlbum = valueAlbum.replace('{self}', title);
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
          url = url.replace(/({id})/g, id);
        }       
        urls[key] = url;
      }); 
      callback("albums", urls);   
    });
  }

};

String.prototype.deleteUnWantedChars = function() {
  current = this.replace(/\w\S*/g, function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1);
            });
  current = current.replace(/'\w/g, function(txt) {
              return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2);
            });
  current = current.replace(/[()]/g, '').replace(/'/g, '');
  return current.replace(/\s/g, '');
}
