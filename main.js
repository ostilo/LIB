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
