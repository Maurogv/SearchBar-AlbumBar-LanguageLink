(function (window) {
       
       var keyword,
           color= "#E0E0E0",
           bar = function () {
                      var div= $('<div style="background-color:' + '#E0E0E0' + '; margin-top:10px"></div>');
                      return div;
                      },
           elSearch=  function (social) {
                          var elList = [];
                          if (!social) { 
                                 elList.push($('<a href="" style="color:' + this.color + ';">&bnsp;</a>'));
                                 return elList;
                          }
                          if (social.google) {
                             elList.push($('<a href="https://www.google.it/webhp?rls=ig&amp;gws_rd=ssl#q=' + this.keyword + '">' + '<img src="http://icons.iconarchive.com/icons/danleech/simple/16/google-icon.png" />' + '</a>'));
                             elList.push(' ')
                           };
                           if (social.facebook) {
                             elList.push($('<a href="https://www.facebook.com/search/str/' + this.keyword +'/keywords_top">' + '<img src="http://static.viewbook.com/images/social_icons/facebook_16.png" />' + '</a>' ));
                             elList.push(' ')
                           };
                           if (social.instagram) {
                             elList.push($('<a href="https://instagram.com/explore/tags/' + this.keyword + '/">' + '<img src="http://icons.iconarchive.com/icons/designbolts/free-instagram/16/Active-Instagram-2-icon.png" />' + '</a>'));
                             elList.push(' ')
                           };
                           if (social.flickr) {
                             elList.push($('<a href="https://www.flickr.com/search/?text=' + this.keyword +'">' + '<img src="http://static.viewbook.com/images/social_icons/flickr_16.png" />' + '</a>' ));
                             elList.push(' ')
                           };
                           return el
                   };
           
                   
      var searchBar= {keyword,
                      color, 
                      bar
                     /*, get : function (social) {
                             var div=this.bar();
                             var =this.elSearch(social);
                             for (var i = 0; i < elList.length; i++) {
                                 div.append(elList[i]);
                             }
                             return div;
                      } */
      }
      
      window.searchBar=searchBar;
    

})(window);
