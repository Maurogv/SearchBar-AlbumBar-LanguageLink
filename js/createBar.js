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
};

window.callbackCreate =function (source, urls) {
        $.getJSON( "https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/icons16x16.json")
          .done(function(icons) {
            var bar=new window.bar();
            if (source=='search') { bar.insertBefore(document.getElementsByTagName('script')[0].parentNode)}
            else if (source=='albums') { bar.appendTo(document.getElementsByTagName('script')[0].parentNode)};
            padding0px='padding:0px;';

            Object.keys(urls).forEach(function (key) {
                url = urls[key];               
                if (!(window.on!='local' & (key=='plus.google' | key=='facebook_set'))) { 
                    // for exit from forEach loop is better some
                    Object.keys(icons).some(function (iconKey) {
                        repo = icons[iconKey];

                        if ($.inArray(key, repo)!=-1) 
                        {
                          // " style="' + padding0px + '"
                          bar.append($('<a href="' + url + '">' + '<img src="' + iconKey + '" />' + '</a>'));
                          bar.append(' '); 
                          return true;
                        }
                    })  
               }                  
            })
            if ( bar.children().length == 0 ) { 
              bar.append($('<a href="" style="color:' + '#E0E0E0' + ';">&bnsp;</a>'));
            }           
          })                 
      
};
    
    
