(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select('.navbar-default')
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add('navbar-reduce')
        selectHNavbar.classList.remove('navbar-trans')
      } else {
        selectHNavbar.classList.remove('navbar-reduce')
        selectHNavbar.classList.add('navbar-trans')
      }
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Search window open/close
   */
  let body = select('body');
  on('click', '.navbar-toggle-box', function(e) {
    e.preventDefault()
    body.classList.add('box-collapse-open')
    body.classList.remove('box-collapse-closed')
  })

  on('click', '.close-box-collapse', function(e) {
    e.preventDefault()
    body.classList.remove('box-collapse-open')
    body.classList.add('box-collapse-closed')
  })

  /**
   * Intro Carousel
   */
  function stopAutoplayOnOppositeSwipe(swiper) {
    let startX;
  
    // Listen for the start of the touch event
    swiper.el.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
  
    // Listen for the end of the touch event
    swiper.el.addEventListener('touchend', (e) => {
      let endX = e.changedTouches[0].clientX;
      let diffX = startX - endX;
  
      // Determine if the swipe is opposite to the current direction
      if ((diffX > 0 && swiper.swipeDirection === 'prev') || (diffX < 0 && swiper.swipeDirection === 'next')) {
        swiper.autoplay.stop();
      }
    });
  }
  
  // Apply to all your carousels
  const propertyCarousel = new Swiper('#property-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 10000, 
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.propery-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  stopAutoplayOnOppositeSwipe(propertyCarousel);
  
  const newsCarousel = new Swiper('#news-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 10000, // 1 minute
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.news-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  stopAutoplayOnOppositeSwipe(newsCarousel);
  
  const testimonialCarousel = new Swiper('#testimonial-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 10000, // 1 minute
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.testimonial-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  stopAutoplayOnOppositeSwipe(testimonialCarousel);
  
  const propertySingleCarousel = new Swiper('#property-single-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 10000, // 1 minute
      disableOnInteraction: false
    },
    pagination: {
      el: '.property-single-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  stopAutoplayOnOppositeSwipe(propertySingleCarousel);
  

})()
