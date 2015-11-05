window.albumsUrl= function (writing) {
  
  var topic=writing[1],
      title=writing[2];
  
  var albumsCodes, albumsFixedPart;

  $.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsCodes.json")
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
                  
}
    
    
