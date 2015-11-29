window.search = function (callback) {
  lang = window.writing[2];
  if ( lang == 'it') {
    searchJob ();
  }
  else if ( lang == 'en') {
     window.redirect(searchJob);
  }
  
  function searchJob () {
    var urls = {};
  
    $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/search.json").done(function(search) {         
      // [0] value, [1] success 
      currentSearch = search[topic][title];                
      Object.keys(currentSearch).forEach(function (key) {
        // do something with obj[key]
        if ( currentSearch[key].indexOf('{self}') !=-1 ) {
          currentTitle = title;
          if ( key == 'https://www.facebook.com/{search}?fref=ts' |
               key == 'https://www.instagram.com/{search}' |
               key == 'https://www.instagram.com/explore/tags/{search}' |
               key == 'https://twitter.com/{search}' ) {
            currentTitle = currentTitle.replace(/\s/g, '').toLowerCase();
          }
          valueSearch = currentSearch[key].replace('{self}', currentTitle);
        }
        else valueSearch = currentSearch[key];
  
        url = key.replace('{search}', valueSearch);
        urls[key] = url;
      }); 
      callback("search", urls);
    });  
  }

};
