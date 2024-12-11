document.addEventListener('DOMContentLoaded', () => {

$('.hamburger').on('click', function(){

   if($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $('.header-mobile-wrap').slideUp(500);
   }
   else {
    $(this).addClass('is-active');
    $('.header-mobile-wrap').slideDown(500);
   }

  
});

	const bannerSwiper = new Swiper('.banner-swiper', {
        speed: 1000,
        spaceBetween: 0,
        effect: 'fade',
        navigation: {
            nextEl: '.banner-swiper .swiper-button-next',
            prevEl: '.banner-swiper .swiper-button-prev',
          },

          pagination: {
            el: '.banner-swiper .swiper-pagination',
            type: 'bullets',
            clickable: true
          },


          autoplay: {
            delay: 3000,
          },

    });

    $('.services-btn').magnificPopup({
      type: 'inline',
      showCloseBtn: false,
      removalDelay: 500,
      callbacks: {
        beforeOpen: function() {
           this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
    });

})