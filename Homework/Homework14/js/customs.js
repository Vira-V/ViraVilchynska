// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

	var slid = jQuery('#home_slider');
		
	slid.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
				mouseDrag: true
			},
			767:{
				items: 1,
				mouseDrag: true
			},
			991:{
				items: 1,
				mouseDrag: true
			},
			1099:{
				items: 1,
				mouseDrag: true
			}
		}
	});
	
	jQuery('.btn_menu').click(function(event){
				jQuery('.nav-menu ul').toggle('slow');
		});
	
	
jQuery(function() {
   jQuery("[data-fancybox]").fancybox();
});
	});