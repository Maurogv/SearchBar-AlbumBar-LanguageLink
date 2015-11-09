(function(window,document,script, urls){
      urls.forEach(function(url) {
         newScript=document.createElement(script);
         newScript.async=1;
         newScript.src=url;
         scriptTag=document.getElementsByTagName(script)[0];
         scriptTag.parentNode.insertBefore(newScript,scriptTag);
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
        window.createBar('search', window.writing, window.callbackCreate);
      //  window.createBar('albums', window.writing, window.callbackCreate);
     }) 
     
   })(window,document,'script',['https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
                                'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/bar.js',
                                'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/createBar.js'])
