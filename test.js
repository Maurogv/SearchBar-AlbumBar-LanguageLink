(function (window) {
   var a=window['wr'].q.slice.call(arguments);
   for(i=0; i< a.length; i++){
        alert("parameter " + i + " = " + a[i]); 
    }
   alert( );
   alert('hello');
})(window);
