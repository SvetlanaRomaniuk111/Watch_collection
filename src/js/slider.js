const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,

    },
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 2500,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: true,
    },  
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        1158: {
            slidesPerView: 6,
            spaceBetween: 20
          }
      },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });