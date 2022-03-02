$(document).ready(function () {
  $('.main-menu').meanmenu({
    meanMenuContainer: '#mobile-menu',
    meanScreenWidth: 874,
  });

  $("#transition-area").owlCarousel({
    items: 1,
    margin: 0,
    loop:true,
    dots:true,
  })
  $(function(){
    $(".pricing-count span" ).rCounter({
    duration: 30
    });
    });
  


});
