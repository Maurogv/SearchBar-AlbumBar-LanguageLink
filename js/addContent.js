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
       	$.getJSON("https://raw.githubusercontent.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/album.json")
                  .done(function (album) {                   
                      alert (album);         
                  })
                  .fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        alert( "Request Failed: " + err );
                  });
     }) 
     
   })(window,document,'script',['https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js', 'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/ContentsBars_LanguageLink.js'])
