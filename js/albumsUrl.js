window.albumsUrl= function () {

  $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsCodes.json")
                  .done(function (albumsCodes) {                   
                      alert (JSON.stringify(albumsCodes['grignone'].acquafredda));  
                  })
                  .fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        alert( "Request Failed: " + err );
                  });
                  
  $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsFixedPart.json")
                  .done(function (albumsFixedPart) {                   
                      
                  })
                  .fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        alert( "Request Failed: " + err );
                  });   
                  
              
                  
}
    
    
