const swiperTop = new Swiper('.top__slider', {
  // loop: true,
  effect: 'fade',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiperAbout = new Swiper('.about__slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('.accordeon__trigger').forEach(element => {
  element.addEventListener('click', () => {
    element.parentNode.classList.toggle('accordeon__item-active');
  })
});