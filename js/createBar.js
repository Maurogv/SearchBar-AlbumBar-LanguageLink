window.createBar = function (source, writing, callback) {
      
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
            if (source=='search') {
              if (currentCodes[key]=='self') {
                 code=title;
                 if (key=='facebook' | key=='instagram' | key=='instagram_tags' | key=='twitter') {
                  code=code.replace(/\s/g, '').toLowerCase();
                 };
              }
              else code= currentCodes[key];
            }
            else code= currentCodes[key];
            url=prefix + code;
            url+= fixedPart[0][key+'_end'] ? fixedPart[0][key+'_end'] : '';
            urls[key]=url;
         }); 
        callback(source, urls);   
       });                                         
}
    
    
