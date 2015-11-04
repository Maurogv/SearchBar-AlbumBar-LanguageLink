function (album) {

 $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/album.json")
                  .done(function (album) {                   
                      alert (JSON.stringify(album['grignone'].acquafredda));         
                  })
                  .fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        alert( "Request Failed: " + err );
                  });
    
}
    
    
