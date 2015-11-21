window.posts = function (callback) {
    
  window.redirect(postsJob);
  function postsJob () {
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
  
window.addPostToBar = function (urls) {
  $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/icons16x16.json").done(function(icons) {
    var lang= window.writing[2],
        otherLang = lang == 'it' ? 'en' : 'it',
        on = window.writing[3],
        found;
           
    Object.keys(icons).some(function (iconKey) {
      repo = icons[iconKey];
      repo.forEach(function(currentRepo) {
        if ( urls[lang].slice(0,currentRepo.length) == currentRepo ) 
        {
          if ( on == "local" ) {
            $('#albumsBar').append($('<a href="' + urls[lang] + '">' + '<img src="' + iconKey + '" style="float:right;"/>' + '</a>'));               
          }
          language =  lang == 'it' ? 'English' : 'Italiano'; 
          $('#searchBar').append($('<a href="' + urls[otherLang] + '" style="float:right;">' + language + '</a>'));
          found=true;
        }
      });
      return found;
    })        

  })
}
  
String.prototype.toUrl = function() {
  return this.replace(/[()-]/g,'').replace(/'/g,'').replace(/\s+/g, '-').toLowerCase();
}
