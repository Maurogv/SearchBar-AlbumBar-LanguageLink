(function(window,document,script, urls){
      urls.forEach(function(url) {
         newScript=document.createElement(script);
         newScript.async=0;
         newScript.src=url;
         scriptTag=document.getElementsByTagName(script)[0];
         scriptTag.parentNode.insertBefore(newScript,scriptTag);
         alert(url);
      });
    	alert (window.writing);
   })(window,document,'script',['https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js', 'https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/ContentsBars_LanguageLink.js'])
