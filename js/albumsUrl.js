window.albumsUrl= function (writing) {
  
  topic=writing(1);
  title=writing(2);

  $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsCodes.json")
                  .done(function (albumsCodes) {                   
                      
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
                  
  alert (JSON.stringify(albumsCodes[topic][title]));             
                  
}
    
    
