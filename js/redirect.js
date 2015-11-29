window.redirect = function (callback) {
  title = window.writing[0],    
  topic = window.writing[1],
  lang = window.writing[2],
  enTitle = window.writing[0];
 
  var topPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/redirectTop.json");
  var secondPromise = $.getJSON("https://rawgit.com/Maurogv/SearchBar-MyContentBar-LanguageLink/master/json/redirect.json");
     
  $.when(topPromise, secondPromise).done(function(topics, titles) {
    currentTopics=topics[0];
    Object.keys(currentTopics).forEach(function (key) {
      if ( key == topic ) {
        topic = currentTopics[key];
        return true;
      };
    })  
  
    currentTitles=titles[0];
    Object.keys(currentTitles[topic]).forEach(function (key) {
      if ( currentTitles[topic][key] == title ) {
        enTitle = key;
        return true;
      };
    })  
    title = currentTitles[topic][title] || title;

    callback();
  })
}
