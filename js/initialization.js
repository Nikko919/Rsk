// var swiper = new Swiper(".servicesSwiper", {
//   slidesPerView: 1.20, // Показывать 1.5 слайда
//   spaceBetween: 10,
//   breakpoints: {
//     // Начиная с 768px
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },

//   },
// });


let servicesSwiper = null;

function toggleSwiperOrGrid() {
  const swiperContainer = document.querySelector('.servicesSwiper');
  const wrapper = swiperContainer.querySelector('.servicesSwiper__wrapper');
  const slides = wrapper.querySelectorAll('.servicesSwiper__slide');

  if (window.innerWidth < 1200) {
    // Если Swiper ещё не инициализирован — запускаем
    if (!servicesSwiper) {
      wrapper.classList.add('swiper-wrapper');
      slides.forEach(slide => slide.classList.add('swiper-slide'));

      servicesSwiper = new Swiper('.servicesSwiper', {
        slidesPerView: 1.20,
        spaceBetween: 10,

        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          // 1024: {
          //   slidesPerView: 3,
          // }
        },
      });

      wrapper.style.display = ''; // Убираем grid
      wrapper.style.gridTemplateColumns = '';
      wrapper.style.gap = '';
    }
  } else {
    // Если ширина >= 1200px — уничтожаем Swiper и делаем сетку
    if (servicesSwiper) {
      servicesSwiper.destroy(true, true);
      servicesSwiper = null;
    }

    wrapper.classList.remove('swiper-wrapper');
    slides.forEach(slide => slide.classList.remove('swiper-slide'));

    // Сетка
    // wrapper.style.display = 'grid';
    // wrapper.style.gridTemplateColumns = 'repeat(auto-fit, minmax(480px, 1fr))';
    // wrapper.style.gap = '20px';
  }
}

// Инициализация при загрузке и изменении окна
window.addEventListener('load', toggleSwiperOrGrid);
window.addEventListener('resize', toggleSwiperOrGrid);




// блог


var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 1.20,
  spaceBetween: 10,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,

    }
  },
  navigation: {
    nextEl: ".blog-button-prev",
    prevEl: " .blog-button-next",
  },
});


// articleSwiper

var swiper = new Swiper(".articleSwiper", {
  slidesPerView: 1.50, // Показывать 1.5 слайда
  spaceBetween: 10,
  grabCursor: true,
  breakpoints: {
    // Начиная с 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3.20,
      spaceBetween: 20,
    },

  },
});
