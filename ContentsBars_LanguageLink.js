(function (window) {
       
       var color= "#E0E0E0",
           bar = function () {
                    var div= $('<div style="background-color:' + color + '; margin-top:10px"></div>');
                    return div
                 },
           references = function () {          
                      $("my-ref").each(function (index) {
                          $(this).attr("id", "cite_ref-" + (index + 1));
                          $(this).text("");
                          $(this).append("<a href=#cite_note-" + (index + 1) + "> [" + (index + 1) + "]</a>");
                      });
                      //  <li id="cite_note-1"><a href="#cite_ref-1"><b>^</b></a> Cite Note-1</li>
                      $(".references li").each(function (index) {
                          $(this).attr("id", "cite_note-" + (index + 1));
                          $(this).prepend("<a href=#cite_ref-" + (index + 1) + " class='text-decoration-none'><b>^</b></a> ");
                      });
                };
                 
       var icons ={ blogger : 'http://icons.iconarchive.com/icons/marcus-roberto/google-play/16/Blogger-icon.png',
                   facebook : 'http://static.viewbook.com/images/social_icons/facebook_16.png',
                   flickr : 'http://static.viewbook.com/images/social_icons/flickr_16.png',
                   google : 'http://it.yourtrainings.com/images/brands/logo_google_mini.png',
                   googlePlus : 'https://www.google.com/work/apps/business/img/footer_googleplus.jpg',
                   googleMaps : 'https://storage.googleapis.com/support-kms-prod/SNP_489C87FDD8924CA736B4C15B1CC4B0F60D92_3640734_en_v0',
                   instagram : 'http://icons.iconarchive.com/icons/designbolts/free-instagram/16/Active-Instagram-2-icon.png',
                   onedrive : 'http://img.informer.com/icons/png/16/3999/3999393.png',
                   tumblr : 'http://www.theruleoflead.com/images/tumblr.png',
                   twitter : 'https://g.twimg.com/twitter-bird-16x16.png'
       };
      
       var searchBar= function (social) {
                             references();
                             this.id = 'searchBar';
                             var socialKeyword;
       
                             var div= bar();
                             div.attr('id', this.id);
                             if (!social) { 
                                    div.append($('<a href="" style="color:' + color + ';">&bnsp;</a>'));
                                    return div;
                             }
                             if (social.google) {
                                socialKeyword= social.google==true ? window.title.replace(/\s/g, '+').toLowerCase() : social.google.replace(/\s/g, '+').toLowerCase();
                                div.append($('<a href="https://www.google.it/webhp?rls=ig&amp;gws_rd=ssl#q=' + socialKeyword + '">' + '<img src="' + icons.google + '"/>' + '</a>'));
                                div.append(' ')
                             };
                             if (social.google_maps) {
                                socialKeyword= social.google_maps==true ? window.title.replace(/\s/g, '+') : social.google_maps.replace(/\s/g, '+');
                                div.append($('<a href="https://www.google.it/maps/place/' + socialKeyword + '">' + '<img src="' + icons.googleMaps + '"/>' + '</a>'));
                                div.append(' ')
                             };
                             if (social.facebook) {
                                socialKeyword= social.facebook==true ? window.title.replace(/\s/g,'').toLowerCase() : social.facebook; 
                                socialKeyword+='?fref=ts';
                                div.append($('<a href="https://www.facebook.com/' + socialKeyword +'">' + '<img src="' + icons.facebook + '"/>' + '</a>' ));
                                div.append(' ')
                             }
                             if (social.facebook_search) {
                                socialKeyword= social.facebook_search==true ? window.title : social.facebook_search; 
                                div.append($('<a href="https://www.facebook.com/search/str/' + socialKeyword +'/keywords_top">' + '<img src="' + icons.facebook + '"/>' + '</a>' ));
                                div.append(' ')
                             };
                             if (social.facebook_pages) {
                                socialKeyword= social.facebook_pages==true ? window.title : social.facebook_pages; 
                                socialKeyword+='?fref=ts';
                                div.append($('<a href="https://www.facebook.com/pages/' + socialKeyword +'">' + '<img src="' + icons.facebook + '"/>' + '</a>' ));
                                div.append(' ')
                             };
                             if (social.instagram) {
                                socialKeyword= social.instagram==true ? window.title.replace(/\s/g,'').toLowerCase() : social.instagram; 
                                div.append($('<a href="https://www.instagram.com/' + socialKeyword +'">' + '<img src="' + icons.instagram + '"/>' + '</a>' ));
                                div.append(' ')
                             }
                             if (social.instagram_tags) {
                                socialKeyword= social.instagram_tags==true ? window.title.replace(/\s/g, '').toLowerCase() : social.instagram_tags.toLowerCase();
                                div.append($('<a href="https://instagram.com/explore/tags/' + socialKeyword  + '/">' + '<img src="' + icons.instagram + '"/>' + '</a>'));
                                div.append(' ') 
                             };
                             if (social.instagram_locations) {
                                div.append($('<a href="https://instagram.com/explore/locations/' + social.instagram_locations  + '/">' + '<img src="' + icons.instagram + '"/>' + '</a>'));
                                div.append(' ')
                             };
                             if (social.flickr) {
                                div.append($('<a href="https://www.flickr.com/search/?text=' + window.title +'">' + '<img src="' + icons.flickr + '"/>' + '</a>' ));
                                div.append(' ')
                             };
                             if (social.twitter) {
                                socialKeyword= social.twitter==true ? window.title.replace(/\s/g, '').toLowerCase() : social.twitter; 
                                div.append($('<a href="https://twitter.com/' + socialKeyword +'">' + '<img src="' + icons.twitter + '"/>' + '</a>' ));
                                div.append(' ')
                             };
                             if (social.twitter_search) {
                                socialKeyword= social.twitter_search==true ? window.title : social.twitter_search; 
                                socialKeyword+='&src=typd';
                                div.append($('<a href="https://twitter.com/search?q=' + socialKeyword +'">' + '<img src="' + icons.twitter + '"/>' + '</a>' ));
                                div.append(' ')
                             };
                             return div
       
                };            
                      
      
         var myContentBar = function (social) {
                             var div= bar();
                             // to override .post-body in blogspot
                             div.attr('font-size', '100%');
                             div.attr('line-height', '1.1'); 
                             var facebook_set='https://www.facebook.com/mauro.vezzoli.77/media_set?set=a.',
                                 facebook_end='.100000433081467&type=3',
                                 flickr_sets='https://www.flickr.com/photos/95893200@N07/sets/',
                                 flickr_galleries='https://www.flickr.com/photos/95893200@N07/galleries/',
                                 photos_google='https://photos.google.com/u/0/album/',
                                 plus_google='https://plus.google.com/u/0/photos/113727750810625155496/albums/'
                                 onedrive='https://onedrive.live.com/?id=B65050E4B8CE1B76!',
                                 onedrive_end='&cid=B65050E4B8CE1B76&group=0',
                                 padding0px='padding:0px;';
                                 
                             if (social.photos_google) {
                                div.append($('<a href="' + photos_google + social.photos_google + '">' + '<img src="' + icons.googlePlus + '" style="' + padding0px + '" />' + '</a>'));
                                div.append(' ')
                             };
                             if (social.plus_google) {
                                div.append($('<a href="' + plus_google + social.plus_google + '">' + '<img src="' + icons.googlePlus + '" style="' + padding0px + '" />' + '</a>'));
                                div.append(' ')
                             };
                             if (social.flickr_sets) {
                                div.append($('<a href="' + flickr_sets + social.flickr_sets + '">' + '<img src="' + icons.flickr + '" style="' + padding0px + '" />' + '</a>' ));
                                div.append(' ')
                             };
                             if (social.flickr_galleries) {
                                div.append($('<a href="' + flickr_galleries + social.flickr_galleries + '">' + '<img src="' + icons.flickr + '" style="' + padding0px + '" />' + '</a>'));
                                div.append(' ')
                              };
                              if (social.facebook_set) {
                                div.append($('<a href="' + facebook_set + social.facebook_set + facebook_end + '">' + '<img src="' + icons.facebook + '" style="' + padding0px + '" />' + '</a>'));
                                div.append(' ')
                              };
                              if (social.onedrive) {
                                div.append($('<a href="' + onedrive + social.onedrive + onedrive_end + '">' + '<img src="' + icons.onedrive + '" style="' + padding0px + '" />' + '</a>'));
                                div.append(' ')
                              };
                              // if div is empty float no space up then background no color
                              div.append($('<a href="" style="color:' + color + ';">&bnsp;</a>'));
                              if (social.blogger) {
                                var domain= toUrlFormat(social.blogger);
                                div.append($('<a href="' + domain + '.html">' + '<img src="' + icons.blogger + '" style="' + padding0px + ' float:right;" />' + '</a>'));
                                div.append(' ')
                              };
                              if (social.tumblr) {
                                var domain= toUrlFormat(social.tumblr);
                                div.append($('<a href="' + domain + '.html">' + '<img src="' + icons.tumblr + '" style="' + padding0px + ' float:right;" />' + '</a>'));
                                div.append(' ')
                              };
                             
                             return div
              };
                  

        var languageLink=  function (lang, blog, post) { 
                             if (lang) {
                                 var language;
                                 if (lang=='it') {language="Italiano"};
                                 if (lang=='en') {language="English"};
                                 var endDomain= post ? post :  window.title.replace(/-\s/g,'').replace(/\s/g,'-').toLowerCase();
                                 return $('<a style="float:right;" href="' + blog + endDomain +'.html">' + language + '</a>')
                             }
                             else return;
                    };
                    
        var toUrlFormat =function (fragment) {
               return fragment.replace(/-\s/g,'').replace(/\s/g,'-').replace("'",'').toLowerCase();
        };
                  
        window.searchBar=searchBar;
        window.myContentBar=myContentBar;
        window.languageLink=languageLink;
    
})(window);
