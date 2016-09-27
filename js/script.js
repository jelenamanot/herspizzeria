$(document).ready(function() {

	// Sticky 
	$('.js--resabout').waypoint(function(direction) {
		if(direction == "down") {
			$('nav').addClass('sticky');
		}
		else {
			$('nav').removeClass('sticky');
		}
	}, {
		// 60px iznad sekcije
		offset: '60px;'
	});

	// Navigation scroll - smooth scrolling
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top-41
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	// Mobile Navigation
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		nav.slideToggle(200); //200 miliseconds

		// promena ikonice
		if (icon.hasClass('fa-bars')) {
			icon.removeClass('fa-bars');
			icon.addClass('fa-times');
		}
		else {
			icon.removeClass('fa-times');
			icon.addClass('fa-bars');
		}

	});

});