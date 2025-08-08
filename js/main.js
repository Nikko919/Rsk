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


// Добавляем этот скрипт
// document.addEventListener('DOMContentLoaded', function () {
//   const cards = document.querySelectorAll('.service-mid-card');
//   const cardsBox = document.querySelector('.service-content-mid__cards-box');

//   // Функция для активации каскада
//   function activateCascade() {
//     const boxTop = cardsBox.getBoundingClientRect().top;
//     const boxHeight = cardsBox.offsetHeight;
//     const windowHeight = window.innerHeight;

//     // Когда блок появляется в зоне видимости
//     if (boxTop < windowHeight * 0.8 && boxTop > -boxHeight * 0.5) {
//       const scrollProgress = Math.min(1, Math.max(0, (windowHeight * 0.8 - boxTop) / (boxHeight * 0.6)));

//       cards.forEach((card, index) => {
//         // Задержка для каждой карточки
//         if (scrollProgress > index * 0.2) {
//           card.classList.add('active');
//           card.style.transitionDelay = `${index * 0.1}s`;
//         } else {
//           card.classList.remove('active');
//           card.style.transitionDelay = '0s';
//         }
//       });
//     }
//   }

//   // Запускаем при загрузке и скролле
//   window.addEventListener('scroll', activateCascade);
//   activateCascade(); // Инициализация
// });



// document.addEventListener('DOMContentLoaded', function () {
//   const cards = document.querySelectorAll('.service-mid-card');
//   const cardsBox = document.querySelector('.service-content-mid__cards-box');
//   let hasAnimated = false; // Флаг, чтобы анимация сработала только один раз

//   function handleScroll() {
//     const boxTop = cardsBox.getBoundingClientRect().top;
//     const triggerPoint = window.innerHeight * 0.8;

//     // Если блок вошел в зону видимости и анимация еще не запускалась
//     if (boxTop < triggerPoint && !hasAnimated) {
//       hasAnimated = true; // Запрещаем повторный запуск

//       // Запускаем каскадную анимацию для каждой карточки
//       cards.forEach((card, index) => {
//         setTimeout(() => {
//           card.classList.add('active');
//         }, index * 100); // Задержка для эффекта каскада
//       });

//       // Отключаем обработчик скролла, чтобы анимация не сбрасывалась
//       window.removeEventListener('scroll', handleScroll);
//     }
//   }

//   window.addEventListener('scroll', handleScroll);
//   handleScroll(); // Проверяем при загрузке страницы
// });

//  для карточке в усгуле чтоб накладывались друг на друга
(function () {
  const root = document.querySelector('.service-content-mid');
  if (!root) return;

  // Считываем шаг каскада из data-gap (по умолчанию 40)
  const gapAttr = parseInt(root.getAttribute('data-gap'), 40);
  if (!Number.isNaN(gapAttr)) {
    root.style.setProperty('--gap', `${gapAttr}px`);
  }

  const inner = root.querySelector('.service-content-mid__cards-box');
  const cards = Array.from(inner.querySelectorAll('.service-mid-card'));
  const cardsCount = cards.length || 1;

  // Проставляем индекс каждой карточке как CSS-переменную --i
  cards.forEach((card, i) => {
    card.style.setProperty('--i', i);
  });

  // Сообщаем контейнеру, сколько карточек — нужно для корректной высоты секции
  root.style.setProperty('--cards', cardsCount);

  // Обновляем --vh (иногда полезно, если мобильный браузер меняет vh)
  const setVH = () => root.style.setProperty('', `${window.innerHeight}px`);
  // const setVH = () => root.style.setProperty('--vh', `${window.innerHeight}px`);
  setVH();
  window.addEventListener('resize', setVH, { passive: true });

  // Одноразовая анимация появления всего блока через IntersectionObserver
  // При первом входе в viewport добавляем .is-in и больше не снимаем
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        root.classList.add('is-in');
        obs.disconnect(); // сработает только один раз
      }
    });
  }, {
    root: null,
    threshold: 0.1
  });

  io.observe(root);

  // Ничего больше не нужно: sticky сам «приклеит» карточки к своим top-отметкам.
  // При дальнейшем скролле ниже секции карточки остаются в финальном наложенном состоянии,
  // пока секция не выйдет из вьюпорта — ровно как требуется.
})();
