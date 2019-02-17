// *** MODULE TO HANDLE THE BUDGET DATA || using the module-pattern *** //

// IIFE - encapsulating the fields
// BUDGET CONTROLLER
var budgetController = (function() {

    var x = 23;
    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }

})();


var UIController = (function () {

})();

var controller = (function() {


})();
