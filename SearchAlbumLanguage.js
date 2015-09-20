(function (window) {
       
       var color= "#E0E0E0",
           bar = function () {
                    var div= $('<div style="background-color:' + color + '; margin-top:10px"></div>');
                    return div
                 };
                 
      var icons ={ facebook : 'http://static.viewbook.com/images/social_icons/facebook_16.png',
                   flickr : 'http://static.viewbook.com/images/social_icons/flickr_16.png',
                   google : 'http://it.yourtrainings.com/images/brands/logo_google_mini.png',
                   googlePlus : 'http://ssl.gstatic.com/images/icons/gplus-16.png',
                   googleMaps : 'https://storage.googleapis.com/support-kms-prod/SNP_489C87FDD8924CA736B4C15B1CC4B0F60D92_3640734_en_v0',
                   instagram : 'http://icons.iconarchive.com/icons/designbolts/free-instagram/16/Active-Instagram-2-icon.png',
                   onedrive : 'http://img.informer.com/icons/png/16/3999/3999393.png',
                   twitter : 'https://g.twimg.com/twitter-bird-16x16.png'
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
                                socialKeyword= social.google_maps==true ? window.keyword.replace(/\s/g, '+') : social.google_maps.replace(/\s/g, '+');
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
                             if (social.twitter) {
                                socialKeyword= social.twitter==true ? window.keyword : social.twitter; 
                                div.append($('<a href="https://twitter.com/' + socialKeyword +'">' + '<img src="' + icons.twitter + '"/>' + '</a>' ));
                                div.append(' ')
                             };
                             return div
       
                };            
                      
      
         var albumBar = function (social) {
                             var div= bar();
                             // to override .post-body in blogspot
                             div.attr('font-size', '100%');
                             div.attr('line-height', '1.1'); 
                             var facebook='https://www.facebook.com/mauro.vezzoli.77/media_set?set=a.',
                                 facebook_end='.100000433081467&type=3',
                                 flickr_set='https://www.flickr.com/photos/95893200@N07/sets/',
                                 flickr_gallery='https://www.flickr.com/photos/95893200@N07/galleries/',
                                 google='https://photos.google.com/u/0/album/',
                                 onedrive='https://onedrive.live.com/?id=B65050E4B8CE1B76!',
                                 onedrive_end='&cid=B65050E4B8CE1B76&group=0';
                                 
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
                              if (social.facebook) {
                                div.append($('<a href="' + facebook + social.facebook + facebook_end + '">' + '<img src="' + icons.facebook + '" style="padding:0px;" />' + '</a>'));
                                div.append(' ')
                              };
                              if (social.onedrive) {
                                div.append($('<a href="' + onedrive + social.onedrive + onedrive_end + '">' + '<img src="' + icons.onedrive + '" style="padding:0px;" />' + '</a>'));
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
