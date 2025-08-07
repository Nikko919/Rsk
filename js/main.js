// document.addEventListener('DOMContentLoaded', function () {
//   const cards = document.querySelectorAll('.service-mid-card');

//   // Настройка Intersection Observer для переключения активной карточки
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // Убираем активный класс у всех карточек
//         cards.forEach(card => card.classList.remove('active'));
//         // Добавляем активный класс текущей карточке
//         entry.target.classList.add('active');
//       }
//     });
//   }, {
//     threshold: 0.5,
//     rootMargin: '0px 0px -50% 0px'
//   });

//   // Наблюдаем за всеми карточками
//   cards.forEach(card => observer.observe(card));
// });

// function setStickyCardTops() {
//   const cards = document.querySelectorAll('.service-mid-card');
//   const isMobile = window.innerWidth < 1200;
//   const cardHeaderHeight = isMobile ? 48 : 56;
//   cards.forEach((card, idx) => {
//     card.style.top = (idx * cardHeaderHeight) + 'px';
//   });
// }

// window.addEventListener('DOMContentLoaded', setStickyCardTops);
// window.addEventListener('resize', setStickyCardTops);