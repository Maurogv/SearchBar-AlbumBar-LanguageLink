(function(window,document,script, urls){
  urls.forEach(function(url) {
     newScript = document.createElement(script);
     newScript.async = 1;
     newScript.src = url;
     scriptTag = document.getElementsByTagName(script)[0];
     scriptTag.parentNode.insertBefore(newScript, scriptTag);
  })
    	
  // Poll for jQuery to come into existance
  var checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
    }
    else {
      window.setTimeout(function () { checkReady(callback); }, 100);
    }
  };

  // Start polling...
  checkReady(function ($) { 
    // Use $ here...
    window.search(window.icons);
    window.albums(window.icons);
    window.post(window.iconLanguagePost);
  }) 
     
 // 'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/addToBar.js',
 // 'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/addPostToBar.js',
})(window, document, 'script', ['https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/bar.js',
                                'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/albums.js',
                                'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/search.js',
                                'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/post.js',
                                'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/icons16x16.js',
                                'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/redirect.js',
                                'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'])
