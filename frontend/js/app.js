 
var Application = function () {
    
    var app = {};

    app.widgets = {

        init: function () {
            this.someFunction();
        },

        someFunction: function () {
            console.log("happens");
        }
            
    };

    // Scroll tricker
    app.scroll = {

        init: function () {
            this.scroller();
        },

        scroller: function () {

        }

    };

    app.utilis = {

    };

    // Initializer
    app.initialize = (function () {

        app.widgets.init();
        // Globalize scope
        Application = app;
    }());
    
};

// Document ready method
document.addEventListener('DOMContentLoaded', Application());