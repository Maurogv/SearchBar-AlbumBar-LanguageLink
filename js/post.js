window.post = function (callback) {
    
  window.redirect(postJob);
  function postJob () {
    var lang = window.writing[2],
        urls = {};

    $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/posts.json").done(function(posts) {         
      // [0] value, [1] success 
      currentPosts = posts[topic][title];   

      Object.keys(currentPosts).forEach(function (keyLang) {
        Object.keys(currentPosts[keyLang]).forEach(function (key) {           
          if ( currentPosts[keyLang][key].indexOf('{self}') !=-1 ) {
            if ( keyLang == 'en' ) {
              currentTitle = enTitle;
            };
            if ( keyLang == 'it' ) {
              currentTitle = title;
            };  
            currentTitle = currentTitle.toUrl();           
            valueSearch = currentPosts[keyLang][key].replace('{self}', currentTitle);
          }          
          else valueSearch = currentPosts[keyLang][key];
          url = key.replace('{post}', valueSearch);
          urls[keyLang] = url;
        });                
      }); 
      callback(urls);
    });  
  }
}
  
String.prototype.toUrl = function() {
  return this.replace(/[()-]/g, '').replace(/'/g, '').replace(/\s+/g, '-').toLowerCase();
}
