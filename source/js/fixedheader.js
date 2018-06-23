var scrollFloat = function() {
    var headerMenu = document.querySelector(".header__menu");
    var headerBackground = document.querySelector(".header__background");
    var headerLogo = document.querySelector(".header__logo");
    var headerContacts = document.querySelector(".header__contacts");
    var headerContactLink = document.querySelector(".header__contacts-link");

    'use strict';

    var app = {};

    app.init = function init(node) {
        if (!node || node.nodeType !== 1) {
            throw new Error(node + ' is not DOM element');
        }
        handleWindowScroll(node);
    };

    function handleWindowScroll(floatElement) {
        window.onscroll = function() {
            if (window.scrollY > floatElement.offsetTop) {
                if (floatElement.style.position !== 'fixed') {
                    headerMenu.classList.add("header__menu_fixed");
                    headerBackground.classList.add("header__background_fixed");
                    headerLogo.classList.add("header__logo_fixed");
                    headerContacts.classList.add("header__contacts_fixed");
                    headerContactLink.classList.add("header__contacts-link_fixed");


                    floatElement.style.position = 'fixed';
                    floatElement.style.top = '0';
                    floatElement.style.left = '0';
                    floatElement.style.right = '0';
                    floatElement.style.zIndex = '1000';
                }

            } else {
                if (floatElement.style.position === 'fixed') {
                    headerMenu.classList.remove("header__menu_fixed");
                    headerBackground.classList.remove("header__background_fixed");
                    headerLogo.classList.remove("header__logo_fixed");
                    headerContacts.classList.remove("header__contacts_fixed");
                    headerContactLink.classList.remove("header__contacts-link_fixed");

                    floatElement.style.position = '';
                    floatElement.style.top = '';
                }
            }
        };
    }

    return app;
}();
