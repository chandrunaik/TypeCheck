/**
  * window - global object
  * function to check all the data types in javascript
  */
(function(window){
  var typeCheck = {};
  
  // check variable is defined or not
  // return true if defined, else false
  typeCheck.isDefined = function(val){
    return Object.prototype.toString.call(val) === "[object Undefined]";
  };
  
  //export the lib as a global object of window
  return window.typeCheck = typeCheck;
})(window);
