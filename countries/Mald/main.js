

            function parallax (event){
  this.querySelectorAll('.layer').forEach(layer =>{
    let  speed = layer.getAttribute('data-speed')
    layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
  })
}

document.addEventListener('mousemove', parallax)



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
