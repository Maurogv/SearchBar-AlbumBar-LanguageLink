window.albumsUrl= function (writing, callback) {
      
     var topic=window.writing[1],
         title=window.writing[2],
         urls={};

      var firstPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsCodes.json");
      var secondPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/albumsFixedPart.json");
     
      $.when(firstPromise, secondPromise).done(function(albumsCodes, albumsFixedPart) {         
         // [0] value, [1] success 
         currentAlbumCodes=albumsCodes[0][topic][title];        
         
         Object.keys(currentAlbumCodes).forEach(function (key) {
            // do something with obj[key]
            prefixAlbum=albumsFixedPart[0][key];  
            url=prefixAlbum+ currentAlbumCodes[key];
            url+= albumsFixedPart[0][key+'_end'] ? albumsFixedPart[0][key+'_end'] : '';
            urls[key]=url;
           // urls.push({key:key, url:url});
         }); 
        callback(urls);   
       });     
                  
}
    
    
