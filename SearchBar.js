(function (window) {
       
       var keyword,
           color= "#E0E0E0",
           bar = function () {
                      var div= $('<div style="background-color:' + this.color + '; margin-top:10px"></div>');
                      return div;
                      };  
                   
      var searchBar= {keyword,
                      color, 
                      bar
      }
      
      window.searchBar=searchBar;
    

})(window);
