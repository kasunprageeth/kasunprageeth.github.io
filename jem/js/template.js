jQuery(function($) {

	//Isotope
	$(window).load(function(){
		$portfolio = $('.nino-portfolioItems');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.nino-portfolioFilter > li > a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
	
	//PrettyPhoto
	$("a.preview").prettyPhoto({
		social_tools: false
	});
	
	//scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	});
	
	//smooth scroll effect
	$('.navbar-nav > li > a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#nino-scrollToTop').fadeIn();
		} else {
			$('#nino-scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('#nino-scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});