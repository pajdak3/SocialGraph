 
var Application = function () {
    
    var app = {};

    app.global = {

        init: function () {
            this.someFunction();
            this.blazy();
        },

        someFunction: function () {
            console.log("happens");
        },

        blazy: function () {
            var bLazy = new Blazy({
                offset: 200,
                success: function (ele) {
                    ele.classList.add("loaded");
                }
            });
        }  
    };

    // Scroll tricker
    app.scroll = {

        init: function () {
            this.header();
        },

        header: function () {
            var header = document.querySelector('header');
            var lastScrollTop = 0;
            var hideHeight = 500;

            window.onscroll = function () {
                top_of_window = window.pageYOffset || document.documentElement.scrollTop;

                // Hide and show scroller when scrolling down or up
                if (window.scrollY > hideHeight) {
            
                    if (window.scrollY > lastScrollTop) {
                        header.classList.add("hidden");
        
                    } else {
                        header.classList.remove("hidden");
                    }

                    lastScrollTop = window.scrollY;
                }
            }
        }

    };

    app.utilis = {

    };

    // Initializer
    app.initialize = (function () {

        app.global.init();
        app.scroll.init();
        // Globalize scope
        Application = app;
    }());
    
};

// Document ready method
document.addEventListener('DOMContentLoaded', Application());