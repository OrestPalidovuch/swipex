window.onload = function() {
// animation active
			$(".product ul.asortyment li a").on('mouseenter',function() {
			    $(this).parents('.product').find('.item_block span').addClass('animation');
			});
			$("main .product").on('mouseleave',function() {
			    $('.item_block span').removeClass('animation');
			});
// change icons active
			$('a[data-slide-to="1"]').on('mouseenter',function() {
				$(this).parents('.product').find('.item').removeClass('active');
			    $(this).parents('.product').find('.item:nth-child(2)').addClass('active');
			});
			$('a[data-slide-to="2"]').on('mouseenter',function() {
				$(this).parents('.product').find('.item').removeClass('active');
			    $(this).parents('.product').find('.item:nth-child(3)').addClass('active');
			});
			$('a[data-slide-to="3"]').on('mouseenter',function() {
				$(this).parents('.product').find('.item').removeClass('active');
			    $(this).parents('.product').find('.item:nth-child(4)').addClass('active');
			});
			$('a[data-slide-to="4"]').on('mouseenter',function() {
				$(this).parents('.product').find('.item').removeClass('active');
			    $(this).parents('.product').find('.item:nth-child(5)').addClass('active');
			});
			$('a[data-slide-to="5"]').on('mouseenter',function() {
				$(this).parents('.product').find('.item').removeClass('active');
			    $(this).parents('.product').find('.item:nth-child(6)').addClass('active');
			});
			$('a[data-slide-to="6"]').on('mouseenter',function() {
				$(this).parents('.product').find('.item').removeClass('active');
			    $(this).parents('.product').find('.item:nth-child(7)').addClass('active');
			});
// button left 
			$('.menu_trigger').on('click',function() {
				$('.global-wrapper').toggleClass('toLeft');
			    $('.side-modal.left').toggleClass('toLeftActive');
			    $('body'&&'html').toggleClass('no_scroll');
			    $('.btn_close.left').addClass('active');
			    $('.menu_trigger').addClass('hide');
			});
			$('.btn_close.left').on('click',function() {
				$('.global-wrapper').toggleClass('toLeft');
			    $('.side-modal.left').toggleClass('toLeftActive');
			    $('body'&&'html').toggleClass('no_scroll');
			    $('.btn_close.left').removeClass('active');
			    $('.menu_trigger').removeClass('hide');
			});
//button right
			$('.busket_trigger').on('click',function() {
				$('.global-wrapper').toggleClass('toRight');
			    $('.side-modal.right').toggleClass('toLeftActive');
			    $('body'&&'html').toggleClass('no_scroll');
			    $('.btn_close.right').addClass('active');
			    $('.busket_trigger').addClass('hide');
			});
			$('.btn_close.right').on('click',function() {
				$('.global-wrapper').toggleClass('toRight');
			    $('.side-modal.right').toggleClass('toLeftActive');
			    $('body'&&'html').toggleClass('no_scroll');
			    $('.btn_close.right').removeClass('active');
			    $('.busket_trigger').removeClass('hide');
			});
}
