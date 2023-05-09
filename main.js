function parallax (event){
	this.querySelectorAll('.layer').forEach(layer =>{
		let  speed = layer.getAttribute('data-speed')
		layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
	})
}

document.addEventListener('mousemove', parallax)

$('nav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 1000);

    return false;

})


/*$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('nav').addClass('fixed');
        $('.wrapper section').each(function(i) {
            if ($(this).position().top <= windscroll - 20) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

    } else {

        $('nav').removeClass('fixed');
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active');
    }

}).scroll();*/

$(".nav").on("click", ".nav-img" , function () {
		$(".nav .nav-a" ).toggleClass("active");
		$(".nav .nav-img" ).toggleClass("click");
		$(".nav" ).toggleClass("open");

	})


$('body').on('click', function(e){
  if (!$(event.target).closest('.nav').length) {
    $('.nav-a').removeClass('active')
    $('.nav').removeClass('open')
    $('.nav-img').removeClass('click')
  }
})


$(".modal-content").on("click", ".tab", function(){
		// Удаляем классы active
		$(".modal-content").find(".active1").removeClass("active1");
		
		// Добавляем класс

		$(this).addClass("active1");
		$(".tab-form").eq($(this).index()).addClass("active1");
		})

$(".userInput").focus(function() {
			$(this).parent().addClass("focus");
		}).blur(function() {
			 if($(this).val()===''){
				$(this).parent().removeClass("focus");
			}
		})