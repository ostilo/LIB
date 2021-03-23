function parentCell() {
    var myLibrary = {}
    myLibrary.myLov = function () {
        return "OLALEKANAYODEJI"
    };

}

var Utilities= 
{
   show: function(input)
   {
      alert(input);
   }
}

(function(){

  if ( !window.myNamespace ) {
    window.myNamespace = {};
  } 

  myNamespace.function01 = function(){  consoloe.log("one") };
  myNamespace.function02 = function(){ consoloe.log("two")  };

})();


(function (window) {
 function defineBayside(){
         var Bayside =  {}; 
     Bayside.alert = function () {
     alert("Welcome")
     };
     return Bayside;
 }
    if(typeof(Bayside) === 'undefined'){
    window.Bayside = defineBayside();
    }

})(window);



(function(window){
// You can enable the strict mode commenting the following line
// 'use strict';

// This function will contain all our code
function myLibrary(){
var _myLibraryObject = {};

// We will add functions to our library here !

return _myLibraryObject;
}

// We need that our library is globally accesible, then we save in the window
if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
window.myWindowGlobalLibraryName = myLibrary();
}
})(window); // We send the window variable withing our function


// Then we can call it using

