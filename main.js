(function (window) {
    // You can enable the strict mode commenting the following line  
    // 'use strict';

    // This function will contain all our code
    function myLibrary() {
        var _myLibraryObject = {};


        // Just create a property to our library object.
        _myLibraryObject.myCustomLog = function (thingToLog) {
            console.log("My-Custom-Log > Type of variable : " + typeof (thingToLog));
            console.log("My-Custom-Log > Is number : " + !isNaN(thingToLog));
            console.log("My-Custom-Log > Length : " + (thingToLog).length);

            return console.log(thingToLog);
        };

        return _myLibraryObject;
    }

    // We need that our library is globally accesible, then we save in the window
    if (typeof (window.myWindowGlobalLibraryName) === 'undefined') {
        window.myWindowGlobalLibraryName = myLibrary();
    }
})(window); // We send the window variable withing our function
