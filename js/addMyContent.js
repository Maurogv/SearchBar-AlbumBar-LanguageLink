window.addMyContent = function (script) {    
    var bar=new window.bar();  
    bar.appendTo(document.getElementsByTagName(script)[0].parentNode);
    window.albumsUrl(window.writing, callback);

    function callback(urls) {
        $.getJSON( "https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/icons16x16.json")
          .done(function(icons) {
            padding0px='padding:0px;';
            Object.keys(urls).forEach(function (key) {
                url = urls[key];
                // for exit from forEach loop is better some
                Object.keys(icons).some(function (iconKey) {
                    repo = icons[iconKey];                  
                    if ($.inArray(key, repo)!=-1) 
                    {
                      bar.append($('<a href="' + url + '">' + '<img src="' + iconKey + '" style="' + padding0px + '" />' + '</a>'));
                      bar.append(' '); 
                      return true;
                    }
                })                    
            })
            if ( bar.children().length == 0 ) { 
              bar.append($('<a href="" style="color:' + '#E0E0E0' + ';">&bnsp;</a>'));
            }           
          })                 
    };
};
