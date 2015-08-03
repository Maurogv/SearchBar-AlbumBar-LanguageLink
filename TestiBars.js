(function (window) {

       var searchBar=  function (social) {
                          var keyword=window.keyword;
                          var div= $('<div id="searchBar" style="background-color:#E0E0E0"></div>');                       
                           if (social.google) {
                             div.append($('<a href="https://www.google.it/webhp?rls=ig&amp;gws_rd=ssl#q=' + keyword + '">' + '<img src="http://icons.iconarchive.com/icons/danleech/simple/16/google-icon.png" />' + '</a>'));
                              div.append(' ')
                           };
                           if (social.facebook) {
                             div.append($('<a href="https://www.facebook.com/search/str/' + keyword +'/keywords_top">' + '<img src="http://static.viewbook.com/images/social_icons/facebook_16.png" />' + '</a>' ));
                             div.append(' ')
                           };
                           if (social.instagram) {
                             div.append($('<a href="https://instagram.com/explore/tags/' + keyword + '/">' + '<img src="http://icons.iconarchive.com/icons/designbolts/free-instagram/16/Active-Instagram-2-icon.png" />' + '</a>'));
                              div.append(' ')
                           };
                           if (social.flickr) {
                             div.append($('<a href="https://www.flickr.com/search/?text=' + keyword +'">' + '<img src="http://static.viewbook.com/images/social_icons/flickr_16.png" />' + '</a>' ));
                             div.append(' ')
                           };
                           return div
                   };

       var languageLink=  function (blog,lang) { 
                            var keyword=window.keyword;
                             if (lang) {
                                var language;
                                if (lang=='it') {language="Italiano"};
                                if (lang=='en') {language="English"};
                                return $('<a style="float:right;" href="' + blog + keyword.toLowerCase() +'.html">' + language + '</a>')
                             }
                             else return;
                        };
                          
      
      window.searchBar=searchBar;
      window.languageLink=languageLink;

})(window);
