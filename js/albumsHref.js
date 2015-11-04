function albumsHref() {
  var albumsCodes, albumsFixedPart;
  $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/album.json")
                  .done(function (albums) {                   
                      albumsCodes=albums;
                      alert (JSON.stringify(albums['grignone'].acquafredda));         
                  })
                  .fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        alert( "Request Failed: " + err );
                  });
                  
  $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/album.json")
                  .done(function (albums) {                   
                      albumsFixedPart=albums;
                  })
                  .fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        alert( "Request Failed: " + err );
                  });                 
                  
}
    
    
