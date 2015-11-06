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
        albumsUrl(window.writing);
        var bar=new window.bar();
        "<div>Ciao</div>".insertBefore(document.getElementsByTagName(script)[0].parentNode);
     }) 
     
   })(window,document,'script',['https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
                                'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/albumsUrl.js',
                                'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/js/bar.js'])
