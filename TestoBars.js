(function (window) {
       
       var keyword,
           color= "#E0E0E0",
           searchBar=  function (social) {
                          var div= $('<div id="searchBar" style="background-color:' + this.color + '; margin-top:10px"></div>');
                          if (!social) { 
                                 div.append($('<a href="" style="color:' + this.color + ';">&bnsp;</a>'));
                                 return div;
                          }
                          if (social.google) {
                             div.append($('<a href="https://www.google.it/webhp?rls=ig&amp;gws_rd=ssl#q=' + this.keyword + '">' + '<img src="http://icons.iconarchive.com/icons/danleech/simple/16/google-icon.png" />' + '</a>'));
                             div.append(' ')
                           };
                           if (social.facebook) {
                             div.append($('<a href="https://www.facebook.com/search/str/' + this.keyword +'/keywords_top">' + '<img src="http://static.viewbook.com/images/social_icons/facebook_16.png" />' + '</a>' ));
                             div.append(' ')
                           };
                           if (social.instagram) {
                             div.append($('<a href="https://instagram.com/explore/tags/' + this.keyword + '/">' + '<img src="http://icons.iconarchive.com/icons/designbolts/free-instagram/16/Active-Instagram-2-icon.png" />' + '</a>'));
                             div.append(' ')
                           };
                           if (social.flickr) {
                             div.append($('<a href="https://www.flickr.com/search/?text=' + this.keyword +'">' + '<img src="http://static.viewbook.com/images/social_icons/flickr_16.png" />' + '</a>' ));
                             div.append(' ')
                           };
                           return div
                   },
            getSearchBar=  function () { 
                      return $('#searchBar');
                 },     
            languageLink=  function (blog, lang, post) { 
                      if (lang) {
                         var language;
                         if (lang=='it') {language="Italiano"};
                         if (lang=='en') {language="English"};
                         var endDomain= post ? post :  this.keyword.toLowerCase();
                         return $('<a style="float:right;" href="' + blog + endDomain +'.html">' + language + '</a>')
                      }
                      else return;
                 },
            albumBar=  function (social) {
                          // to override .post-body in blogspot
                          var div= $('<div id="albumBar" style="background-color:' + this.color + '; font-size: 100%; line-height: 1.1;"></div>');                       
                          if (social.google) {
                             div.append($('<a href="' + social.google + '">' + '<img src="http://ssl.gstatic.com/images/icons/gplus-16.png" style="padding:0px;" />' + '</a>'));
                             div.append(' ')
                          };
                          if (social.flickr) {
                             div.append($('<a href="' + social.flickr + '">' + '<img src="http://static.viewbook.com/images/social_icons/flickr_16.png" style="padding:0px;" />' + '</a>' ));
                             div.append(' ')
                          };
                          if (social.flickrGal) {
                             div.append($('<a href="' + social.flickrGal + '">' + 'Gal' + '</a>'));
                             div.append(' ')
                           };
                           
                          return div
                   };      
                   
      var testoBars= {keyword,
                      //color, 
                      searchBar,
                      getSearchBar,
                      languageLink,
                      albumBar
      }
      
      window.testoBars=testoBars;
    

})(window);
