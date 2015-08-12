(function (window) {
       
       var color= "#E0E0E0",
           bar = function () {
                    var div= $('<div style="background-color:' + color + '; margin-top:10px"></div>');
                    return div
                 };


       var searchBar= function (social) {
                             this.color=color;
                             this.id = 'searchBar';                   
       
                             var div= bar();
                             div.attr('id', this.id);
                             if (!social) { 
                                    div.append($('<a href="" style="color:' + this.color + ';">&bnsp;</a>'));
                                    return div;
                             }
                             if (social.google) {
                                div.append($('<a href="https://www.google.it/webhp?rls=ig&amp;gws_rd=ssl#q=' + window.keyword + '">' + '<img src="http://icons.iconarchive.com/icons/danleech/simple/16/google-icon.png" />' + '</a>'));
                                div.append(' ')
                              };
                              if (social.facebook) {
                                div.append($('<a href="https://www.facebook.com/search/str/' + window.keyword +'/keywords_top">' + '<img src="http://static.viewbook.com/images/social_icons/facebook_16.png" />' + '</a>' ));
                                div.append(' ')
                              };
                              if (social.instagram) {
                                div.append($('<a href="https://instagram.com/explore/tags/' + window.keyword + '/">' + '<img src="http://icons.iconarchive.com/icons/designbolts/free-instagram/16/Active-Instagram-2-icon.png" />' + '</a>'));
                                div.append(' ')
                              };
                              if (social.flickr) {
                                div.append($('<a href="https://www.flickr.com/search/?text=' + window.keyword +'">' + '<img src="http://static.viewbook.com/images/social_icons/flickr_16.png" />' + '</a>' ));
                                div.append(' ')
                              };
                              return div
                };            
                      
      
         var albumBar = function (social) {
                             this.color=color;
                             var div= bar();

                             // to override .post-body in blogspot
                             div.attr('font-size', '100%');
                             div.attr('line-height', '1.1');                                                
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
                  

        var languageLink=  function (blog, lang, post) { 
                             if (lang) {
                                 var language;
                                 if (lang=='it') {language="Italiano"};
                                 if (lang=='en') {language="English"};
                                 var endDomain= post ? post :  window.keyword.toLowerCase();
                                 return $('<a style="float:right;" href="' + blog + endDomain +'.html">' + language + '</a>')
                             }
                             else return;
                    };
                  
        window.searchBar=searchBar;
        window.albumBar=albumBar;
        window.languageLink=languageLink;
    
})(window);
