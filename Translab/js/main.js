window.log = function(param){
    console.log(param);
};

$(function(){

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		$doc = $(document),
		$win = $(window),
		$html = $(document.documentElement);

	$('table').wrap('<div class="table-wrapper"></div>');

	resizeController(1260, function() {
		log("Функция будет вызвана меньше чем 1260");
	}, function() {
		log("Функция будет вызвана больше чем 1260");
	});

	/*alignElements*/
	function blocksMatchHeight(arr) {
		for (var i = 0; i< arr.length; i++) {
			$(arr[i]).matchHeight();
		}
	}
	var alignElemets = function(){
		blocksMatchHeight([
			'.test'
		]);	
	}
	alignElemets();
	/*alignElements*/

	/*orientationChange*/
	window.addEventListener("orientationchange", function() {
		setTimeout(alignElemets, 500);
		log("orientationChange");
	}, false);
	/*orientationChange*/


	// Esc button
    $doc.on('keyup', function(keyUp){
	    if (keyUp.keyCode 
	    	== 27) {

	    	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
	    	
	        return false;
	    };
	});
	// Esc button

	// Document click begin
	$doc.on('click', function(event){
        if ( $(event.target).closest('.wrapper, .ui-datepicker, .ui-datepicker a, .ui-corner-all').length ){}else {
        	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
        };
    });
    // Document click end


    $(document).ready(function(){

    $('.hslide').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        1024:{
            items:1,
            nav:true
        }
    }
	});


    $('.com__left--slide').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    items:1,
    navText: ["<img src='img/cprev.svg'>","<img src='img/cnext.svg'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        1024:{
            items:1,
            nav:true
        }
    }
	});


	$('.par__cover-slider').owlCarousel({
    loop:true,
    margin:70,
    nav:true,
    items:6,
    dots:false,
    autoWidth:true,
    navText: ["<img src='img/pprev.svg'>","<img src='img/pnext.svg'>"],
    responsive:{
        0:{
            items:2,
            nav:true,
            margin:0,
            autoWidth:false
        },
        450:{
            items:3,
            nav:true,
            margin:20,
            autoWidth:false
          },
        768:{
        	items:4,
            nav:true,
            margin:50
            // autoWidth:false
        },
        1024:{
            items:5,
            nav:true
        },
        1220:{
        	items:6,
        	nav:true
        } 
    }
	});

	$('.par__cover-slider .active:eq(1)').addClass('fil');
	$('.par__cover-slider .owl-next').click(function(){
		$('.par__cover-slider .owl-item').removeClass('fil');
		$('.par__cover-slider .owl-item.active:eq(1)').addClass('fil');
	});
	$('.par__cover-slider .owl-prev').click(function(){
		$('.par__cover-slider .owl-item').removeClass('fil');
		$('.par__cover-slider .owl-item.active:eq(1)').addClass('fil');
	});
	$('.par__cover-slider').mousemove(function(){
		$('.par__cover-slider .owl-item').removeClass('fil');
		$('.par__cover-slider .owl-item.active:eq(1)').addClass('fil');
	});


	$('.par__cover-slider .owl-nav .owl-next').hover(function(){
    $(this).children('img').each(function () {
            var $e = $(this);
            var imgURL = $e.prop('src');
            $.get(imgURL, function (data) {
              var $svg = $(data).find('svg');
              $svg.find('.cls-1').css('fill', '#f1135c');
              $svg.find('.cls-2').css('fill', '#f1135c');
              $svg.find('.cls-3').css('fill', '#f1135c');
              $svg.find('.cls-4').css('fill', '#f1135c');
              $svg.find('.cls-5').css('fill', '#f1135c');
              $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
            });
        });
      },
            function(){
                $(this).children('img').each(function () {
                var $e = $(this);
                var imgURL = $e.prop('src');
                $.get(imgURL, function (data) {
                  var $svg = $(data).find('svg');
                  $svg.find('.cls-1').css('fill', '#c4c4c4');
                  $svg.find('.cls-2').css('fill', '#c4c4c4');
                  $svg.find('.cls-3').css('fill', '#c4c4c4');
                  $svg.find('.cls-4').css('fill', '#c4c4c4');
                  $svg.find('.cls-5').css('fill', '#c4c4c4');
                  $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
                });
            });
            }
      );


	$('.par__cover-slider .owl-nav .owl-prev').hover(function(){
    $(this).children('img').each(function () {
            var $e = $(this);
            var imgURL = $e.prop('src');
            $.get(imgURL, function (data) {
              var $svg = $(data).find('svg');
              $svg.find('.cls-1').css('fill', '#f1135c');
              $svg.find('.cls-2').css('fill', '#f1135c');
              $svg.find('.cls-3').css('fill', '#f1135c');
              $svg.find('.cls-4').css('fill', '#f1135c');
              $svg.find('.cls-5').css('fill', '#f1135c');
              $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
            });
        });
      },
            function(){
                $(this).children('img').each(function () {
                var $e = $(this);
                var imgURL = $e.prop('src');
                $.get(imgURL, function (data) {
                  var $svg = $(data).find('svg');
                  $svg.find('.cls-1').css('fill', '#c4c4c4');
                  $svg.find('.cls-2').css('fill', '#c4c4c4');
                  $svg.find('.cls-3').css('fill', '#c4c4c4');
                  $svg.find('.cls-4').css('fill', '#c4c4c4');
                  $svg.find('.cls-5').css('fill', '#c4c4c4');
                  $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
                });
            });
            }
      );

  // $('.hmenu').children('ul').flexMenu({
  //   linkText:"ЕЩЕ"
  // });

  var mql = window.matchMedia('all and (min-width: 768px)');
    if(mql.matches){
          $('.hmenu').children('ul').flexMenu({
            linkText:"ЕЩЕ"
          });      
    };

  var list = $('.mobile ul')
  var mql = window.matchMedia('all and (max-width: 767px)');
  if(mql.matches){
      $('.hmenu').children('ul').removeClass('flex');
      $('.hmenu').children('ul').removeClass('menu');
      $('.hmenu').children('ul').appendTo('.mobile');
      // $('li.flexMenu-viewMore ul li').appendTo('list');
      $('.burger').click(function(){
        $(this).toggleClass('clicked');
        $('.mbg').toggleClass('show');
        $('.mobile').toggleClass('mopen');
      });
      $('.mobile ul li').has('ul').addClass('child');
      $('.mobile ul li.child > a').prepend('<img src="img/bmore.svg" alt="">');
      $('.mbg').click(function(){
        $(this).removeClass('show');
        $('.mobile').removeClass('mopen');
        $('.burger').removeClass('clicked');
      });
      $('.mobile ul li.child a').click(function(){
        $(this).parent().children('ul').slideToggle(400);
        $(this).toggleClass('rot');
      });
    };

    $('.taccor .taccor__tit').click(function(){
      $(this).toggleClass('open');
      $(this).next().slideToggle();

    });

    $('.vacit .vacit__tit').click(function(){
      $(this).toggleClass('open');
      $(this).next().slideToggle();
    });

    $('.mselect select').styler();
    $('.mselect.mday select').styler({
      selectPlaceholder: 'Выделите дни'
    });
    $('.mfile input').styler({
      fileBrowse: 'Загрузить'
    });
    $('.mcheck input[type="radio"]').styler();

    });
});