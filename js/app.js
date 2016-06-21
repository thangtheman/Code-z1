


var banner=1;
$(document).ready(function(){
	changebanner();
	$("#mainbanner").css('min-height',$(window).height()-30);
	
	if($(window).width()<767){
		$(".boxwrapper").css("width",$(window).width()-15);
		$(".box2").css("height",$(".box2").height()+30);
	}	
	$(".zeeone-slider p, .zeeone-slider h2").css("padding-left",$(".box2").offset().left);
});

$(window).resize(function(){
	$(".zeeone-slider p, .zeeone-slider h2").css("padding-left",$(".box2").offset().left);
	if($(window).width()<767){
		$(".boxwrapper").css("width",$(window).width()-15);
		$(".box2").css("height",$(".box2").height()+30);
	}	
});
function changebanner(){
	setTimeout(function(){
		if(banner==1){
			if($(window).width()<767){
				$("#mainbanner").css('background-image','url(images/banner2-m.jpg)');
			}else{
				$("#mainbanner").css('background-image','url(images/banner2.jpg)');
			}
			banner=2;
		}else{
			if($(window).width()<767){
				$("#mainbanner").css('background-image','url(images/banner1-m.jpg)');
			}else{
				$("#mainbanner").css('background-image','url(images/banner1.jpg)');
			}
			banner=1;
		}	
		changebanner();
	},7000);
}



// Open About Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// Scroll Position Check
$(window).scroll(function(){
	
	if($(window).scrollTop()>$(".hero-img").height()-60){
		$(".scrolldown").addClass("flip");
		$(".scrolldown").attr("href","#mainbanner");
	}else{
		$(".scrolldown").removeClass("flip");
		$(".scrolldown").attr("href","#section2");
	}
});


// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



