window.onload = function() {
			$(".product ul.asortyment li a").on('mouseenter',function() {
			    $(this).parents('.product').find('.item_block span').addClass('animation');
			});
			$("main .product").on('mouseleave',function() {
			    $('.item_block span').removeClass('animation');
			});

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

}
