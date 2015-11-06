window.albumsUrl= function (writing) {
  
  var topic=window.writing[1],
      title=window.writing[2];

  var firstPromise = $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsCodes.json");
  var secondPromise = $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsFixedPart.json");

  $.when(firstPromise, secondPromise).done(function(albumsCodes, albumsFixedPart) {
     // [0] value, [1] success
     currentAlbumCodes=albumsCodes[0][topic][title];
     urls=[];
     Object.keys(currentAlbumCodes).forEach(function (key) {
        // do something with obj[key]
        prefixAlbum=albumsFixedPart[0][key];  
        url=prefixAlbum+ currentAlbumCodes[key];
        url+= albumsFixedPart[0][key+'_end'] ? albumsFixedPart[0][key+'_end'] : '';
        urls.push({key:url});
     });
     return urls;
  });
  
  return null;
                  
}
    
    
