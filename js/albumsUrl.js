window.getUrls = function (source, writing, callback) {
      
     var topic=window.writing[1],
         title=window.writing[2],
         urls={};

      var firstPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/" + source + "Codes.json");
      var secondPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/" + source + "FixedPart.json");
     
      $.when(firstPromise, secondPromise).done(function(codes, fixedPart) {         
         // [0] value, [1] success 
         currentCodes=codes[0][topic][title];        
         
         Object.keys(currentCodes).forEach(function (key) {
            // do something with obj[key]
            prefix=fixedPart[0][key];  
            url=prefix + currentCodes[key];
            url+= fixedPart[0][key+'_end'] ? fixedPart[0][key+'_end'] : '';
            urls[key]=url;
         }); 
        callback(urls);   
       });     
                                      
}
    
    
