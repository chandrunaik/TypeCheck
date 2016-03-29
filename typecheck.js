/**
 * library to check all data types of javascript
 * @param  {[global object]} window [global object]
 * @return {[global object]}        [Return library as a global object]
 */
(function(window) {
    var typeCheck = {};

    /**
     * check variable is defined or not
     * @param  {[any]}  val [any data type]
     * @return {Boolean}     [return true is defined else false]
     */
    typeCheck.isDefined = function(val) {
        return Object.prototype.toString.call(val) === "[object Undefined]";
    };

    //export the lib as a global object of window
    return window.typeCheck = typeCheck;
})(window);
