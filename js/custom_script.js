/*==========================================================
					Js Document  
============================================================
 
Template Name			: Dariel 
Description				: Personal Portfolio HTML Template
Design and Developed by	: Theme-Corner
Version					: 1.0
Created on				: 26/05/2017, 03:10:00 	

============================================================

============================================================*/

(function ($) {
    "use strict";
	
	$(document).ready(function(){
		/*************************************************************
						page loader js activation	
		**************************************************************/		
			$(window).load(function() {
				$(".loader").fadeOut("slow");
			})		
		/*************************************************************
						opaque transparent navbar js activation	
		**************************************************************/			
			$(window).scroll(function() {
				if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
				{
					$('.opaque-navbar').addClass('opaque');
				} else {
					$('.opaque-navbar').removeClass('opaque');
				}
			});	
	
		/*************************************************************
						Type writter txt	
		**************************************************************/				
			var TxtType = function(el, toRotate, period) {
				this.toRotate = toRotate;
				this.el = el;
				this.loopNum = 0;
				this.period = parseInt(period, 10) || 2000;
				this.txt = '';
				this.tick();
				this.isDeleting = false;
			};

			TxtType.prototype.tick = function() {
				var i = this.loopNum % this.toRotate.length;
				var fullTxt = this.toRotate[i];

				if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
				} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
				}

				this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

				var that = this;
				var delta = 200 - Math.random() * 100;

				if (this.isDeleting) { delta /= 2; }

				if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
				} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
				
				}

				setTimeout(function() {
				that.tick();
				}, delta);
			};

			window.onload = function() {
				var elements = document.getElementsByClassName('typewrite');
				for (var i=0; i<elements.length; i++) {
					var toRotate = elements[i].getAttribute('data-type');
					var period = elements[i].getAttribute('data-period');
					if (toRotate) {
					  new TxtType(elements[i], JSON.parse(toRotate), period);
					}
				}
				// INJECT CSS
				var css = document.createElement("style");
				css.type = "text/css";
				css.innerHTML = ".typewrite > .wrap { border-right: 3px solid #feea0e;}";
				document.body.appendChild(css);
			};				
		/*************************************************************
						Counter js activation	
		**************************************************************/		
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});	
		
		/*************************************************************
						Progress bar js activation
		**************************************************************/
			$(window).scroll(function() {		
				$('.progress .progress-bar').css("width",
					function() {
						return $(this).attr("aria-valuenow") + "%";
					}
				);
			});	
			
		/*************************************************************
						client slider js activation	
		**************************************************************/	
			$("#owl-demo").owlCarousel({
				navigation : true,
				autoPlay:3000,
				stopOnHover: true,
				navigation: false,
				pagination: false
			});
 
		/*************************************************************
						Testimonial slider js activation	
		**************************************************************/
			$("#testimonial-slider").owlCarousel({
				items:1,
				itemsDesktop:[1199,1],
				itemsDesktopSmall:[979,1],
				itemsTablet:[768,1],
				pagination: true,
				autoPlay:true
			});		

		/*************************************************************
				portfolio gallery js activation	(isotope slider)
		**************************************************************/		   
			var $isotopvar =  $('.portfolio-items').isotope({
				itemSelector: '.inner',
				layoutMode: 'masonry',
				filter: '*'
			});
				
			$("ul.work li").on('click', function(){
				$("ul.work li").removeClass('active');
					$(this).addClass('active');
				var selector = $(this).attr("data-filter");
				
				$isotopvar.isotope({
					filter: selector
				});			
			});		
			
		/*************************************************************
						google map js activation
		**************************************************************/
			google.maps.event.addDomListener(window, 'load', init);
		
			function init() {
				var mapOptions = {
					zoom: 11,
					scrollwheel: false,


					// The latitude and longitude to center the map (always required)					
					center: new google.maps.LatLng(37.805985, -122.276869), // Oakland, USA

					// How you would like to style the map. 
					//styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#8e8e8e"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#7f7f7f"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#bebebe"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#cbcbcb"},{"weight":"0.69"}]},{"featureType":"administrative.locality","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#e4e4e4"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#cbcbcb"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d9d9d9"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"simplified"}]}]
					styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]

					};
				
				var mapElement = document.getElementById('map');
				var map = new google.maps.Map(mapElement, mapOptions);
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(37.805985, -122.276869), // Oakland, USA
					map: map,
					title: 'Alex!',
					animation:google.maps.Animation.BOUNCE,
					icon: 'images/map-marker.png'				
				});
			}
			
		/*************************************************************
						Scroll to top js activation
		**************************************************************/
			$("#back-top").hide();
			
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 100) {
						$('#back-top').fadeIn();
					} else {
						$('#back-top').fadeOut();
					}
				});

				$('#back-top a').click(function () {
					$('body,html').animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			});
			
		/*************************************************************
			web content scrolling or loading effect js activation
		**************************************************************/
			var wow = new WOW({
				boxClass:     'wow',      
				animateClass: 'animated', 
				offset:       0,          
				mobile:       true,      
				live:         true,       
				callback:     function(box) {
				},
				scrollContainer: null
				});
			wow.init();
			

		/*************************************************************
								The End
		**************************************************************/			

	});
})(jQuery);
