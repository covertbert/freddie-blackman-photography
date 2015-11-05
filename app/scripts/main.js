/* jshint devel:true */

// Top level namespace
var FBP = FBP || {};

// Global Vairables
var mobileNavOpen = $('.navigation--mobile__open-button'),
		mobileNavClose = $('.navigation--mobile__close-button'),
	mobileNavOverlay = $('.navigation--mobile__overlay'),
	mobileNavMenu = $('.navigation--mobile__overlay__menu');


FBP.mobileNav = {

	open: function () {
		"use strict";
		mobileNavOpen.addClass('navigation--mobile__open-button--active');
		mobileNavOverlay.removeClass('navigation--mobile__overlay--inactive').addClass('navigation--mobile__overlay--active');
		mobileNavMenu.addClass('navigation--mobile__overlay__menu--active');
	},

	close: function () {
		"use strict";
		mobileNavOpen.removeClass('navigation--mobile__open-button--active');
		mobileNavOverlay.addClass('navigation--mobile__overlay--inactive').removeClass('navigation--mobile__overlay--active');
		mobileNavMenu.addClass('navigation--mobile__overlay__menu--inactive');
	}

};


FBP.init = function () {
	"use strict";

	mobileNavOpen.on('click', FBP.mobileNav.open);
	mobileNavClose.on('click', FBP.mobileNav.close);
};

$(function () {
	"use strict";
	FBP.init();
});

