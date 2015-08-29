(function (window) {
       
       var color= "#E0E0E0",
           bar = function () {
                    var div= $('<div style="background-color:' + color + '; margin-top:10px"></div>');
                    return div
                 };
                 
      var icons ={ facebook : 'http://static.viewbook.com/images/social_icons/facebook_16.png',
                   flickr : 'http://static.viewbook.com/images/social_icons/flickr_16.png',
                   google : 'http://icons.iconarchive.com/icons/danleech/simple/16/google-icon.png',
                   googlePlus : 'http://ssl.gstatic.com/images/icons/gplus-16.png',
                   googleMaps : 'https://storage.googleapis.com/support-kms-prod/SNP_489C87FDD8924CA736B4C15B1CC4B0F60D92_3640734_en_v0',
                   instagram : 'http://icons.iconarchive.com/icons/designbolts/free-instagram/16/Active-Instagram-2-icon.png'
      };


       var searchBar= function (social) {
                             this.id = 'searchBar';
                             var socialKeyword;
       
                             var div= bar();
                             div.attr('id', this.id);
                             if (!social) { 
                                    div.append($('<a href="" style="color:' + color + ';">&bnsp;</a>'));
                                    return div;
                             }
                             if (social.google) {
                                socialKeyword= social.google==true ? window.keyword.replace(/\s/g, '+').toLowerCase() : social.google.replace(/\s/g, '+').toLowerCase();
                                div.append($('<a href="https://www.google.it/webhp?rls=ig&amp;gws_rd=ssl#q=' + socialKeyword + '">' + '<img src="' + icons.google + '"/>' + '</a>'));
                                div.append(' ')
                              };
                              if (social.google_maps) {
                                socialKeyword= social.google_maps==true ? window.keyword.replace(/\s/g, '+'): social.google.replace(/\s/g, '+');
                                div.append($('<a href="https://www.google.it/maps/place/' + socialKeyword + '">' + '<img src="' + icons.googleMaps + '"/>' + '</a>'));
                                div.append(' ')
                              };
                              if (social.facebook_search) {
                                socialKeyword= social.facebook_search==true ? window.keyword : social.facebook_search; 
                                div.append($('<a href="https://www.facebook.com/search/str/' + socialKeyword +'/keywords_top">' + '<img src="' + icons.facebook + '"/>' + '</a>' ));
                                div.append(' ')
                              };
                              if (social.facebook_pages) {
                                socialKeyword= social.facebook==true ? window.keyword : social.facebook_pages; 
                                socialKeyword+='?fref=ts';
                                div.append($('<a href="https://www.facebook.com/pages/' + socialKeyword +'">' + '<img src="' + icons.facebook + '"/>' + '</a>' ));
                                div.append(' ')
                              };
                              if (social.instagram_tags) {
                                socialKeyword= social.instagram_tags==true ? window.keyword.replace(/\s/g, '').toLowerCase() : social.instagram_tags.toLowerCase();
                                div.append($('<a href="https://instagram.com/explore/tags/' + socialKeyword  + '/">' + '<img src="' + icons.instagram + '"/>' + '</a>'));
                                div.append(' ') 
                              };
                              if (social.instagram_locations) {
                                div.append($('<a href="https://instagram.com/explore/locations/' + social.instagram_locations  + '/">' + '<img src="' + icons.instagram + '"/>' + '</a>'));
                                div.append(' ')
                              };
                              if (social.flickr) {
                                div.append($('<a href="https://www.flickr.com/search/?text=' + window.keyword +'">' + '<img src="' + icons.flickr + '"/>' + '</a>' ));
                                div.append(' ')
                              };
                              return div
       
                };            
                      
      
         var albumBar = function (social) {
                             var div= bar();
                             // to override .post-body in blogspot
                             div.attr('font-size', '100%');
                             div.attr('line-height', '1.1'); 
                             var google='https://photos.google.com/u/0/album/',
                                 flickr_set='https://www.flickr.com/photos/95893200@N07/sets/',
                                 flickr_gallery='https://www.flickr.com/photos/95893200@N07/galleries/';
                             if (social.google) {
                                div.append($('<a href="' + google + social.google + '">' + '<img src="' + icons.googlePlus + '" style="padding:0px;" />' + '</a>'));
                                div.append(' ')
                             };
                             if (social.flickr_sets) {
                                div.append($('<a href="' + flickr_set + social.flickr_sets + '">' + '<img src="' + icons.flickr + '" style="padding:0px;" />' + '</a>' ));
                                div.append(' ')
                             };
                             if (social.flickr_galleries) {
                                div.append($('<a href="' + flickr_gallery + social.flickr_galleries + '">' + '<img src="' + icons.flickr + '" style="padding:0px;" />' + '</a>'));
                                div.append(' ')
                              };
                              
                             return div
              };
                  

        var languageLink=  function (blog, lang, post) { 
                             if (lang) {
                                 var language;
                                 if (lang=='it') {language="Italiano"};
                                 if (lang=='en') {language="English"};
                                 var endDomain= post ? post :  window.keyword.replace(/-\s/g,'').replace(/\s/g,'-').toLowerCase();
                                 return $('<a style="float:right;" href="' + blog + endDomain +'.html">' + language + '</a>')
                             }
                             else return;
                    };
                  
        window.searchBar=searchBar;
        window.albumBar=albumBar;
        window.languageLink=languageLink;
    
})(window);
