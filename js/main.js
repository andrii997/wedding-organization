$(document).ready(function ()  { 

    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('nav.mobile-nav').toggleClass('active');
    });

    $('nav.mobile-nav > ul > li.dropdown').click(function () {
        $('.drop-mobile').not($(this).find('.drop-mobile')).slideUp();
        $(this).find('.drop-mobile').slideToggle();
        $('.flourish').removeClass('active');
        $(this).find('.flourish').toggleClass('active');
    });

    $(".big-slider .thumbnails .thumb.thumb-1").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-1").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-2").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-2").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-3").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-3").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-4").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-4").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-5").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-5").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-6").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-6").addClass('active');
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });


});

$(document).ready(function(){
  $('.investment-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items:1,
      dots:false,
      autoHeight: true
  });

  $('.process-slider .slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items:1,
      dots:false,
      autoHeight: true
  });

});


