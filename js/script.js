
// Header Part Start

  //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_name');
    }
    else {
         $('.navbar').removeClass('sticky_name');
    }
    });


    // Header Part End

// Banner Part Start


$('.bgSlide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:'<i class="fa-solid fa-caret-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-caret-right next"></i>'
  });


  // Banner Part End


  new VenoBox({
    selector: '.my-video-links',
});

// Banner Part End


// Living Part Start


$('.livingSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow:'<i class="fa-solid fa-arrow-left livingLeft"></i>',
  nextArrow:'<i class="fa-solid fa-arrow-right livingright"></i>',

});


// Living Part End


// House Part Start


$('.houseSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:false,
  dots:true,
});



// House Part End


// Back-to-top Part Start

$(window).on('scroll', function(event) {
  if($(this).scrollTop() > 600){
      $('.Back-to-top').fadeIn(200)
  } else{
      $('.Back-to-top').fadeOut(200)
  }
});
//==== Animate the scroll to top
$('.Back-to-top').on('click', function(event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: 0,
  }, 1000);
});

// Back-to-top Part End
