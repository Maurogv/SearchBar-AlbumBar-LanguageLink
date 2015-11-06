window.albumsUrl= function (writing) {
  
  var topic=window.writing[1],
      title=window.writing[2];

  var firstPromise = $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsCodes.json");
  var secondPromise = $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsFixedPart.json");

  $.when(firstPromise, secondPromise).done(function(albumsCodes, albumsFixedPart) {
     // [0] value, [1] success
     currentAlbumCodes=albumsCodes[0][topic][title];
     albumsUrl=[];
     Object.keys(currentAlbumCodes).forEach(function (key) {
        // do something with obj[key]
        prefixAlbum=albumsFixedPart[0][key];  
        url=prefixAlbum+ currentAlbumCodes[key];
        url+= albumsFixedPart[0][key+'_end'] ? albumsFixedPart[0][key+'_end'] : '';
        albumsUrl.push({key,url});
     });
  });
  alert(albumsUrl);
  return albumsUrl;

/*  $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsCodes.json")
                  .done(function (data) {
                      albumsCodes(data);
                  })
                  .fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        alert( "Request Failed: " + err );
                  });
                  
  $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsFixedPart.json")
                  .done(function (data) {                   
                      albumsFixedPart=data;
                  })
                  .fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        alert( "Request Failed: " + err );
                  });   
                  
 var albumsCodes=function albumCodes(data) {return data;}
 alert(albumsCodes); */
                  
}
    
    
