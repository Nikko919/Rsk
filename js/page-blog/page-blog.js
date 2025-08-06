// document.addEventListener('DOMContentLoaded', function () {
//   const filterItems = document.querySelectorAll('.page-blog__filter-item a');
//   const blogCards = document.querySelectorAll('.page-blog__cards-item');
//   let currentActiveTag = null;

//   // Обработчик клика по тегам фильтра
//   filterItems.forEach(item => {
//     item.addEventListener('click', function (e) {
//       e.preventDefault();
//       const clickedTag = this.dataset.tag;

//       // Если кликнули по активному тегу - сброс
//       if (currentActiveTag === clickedTag) {
//         currentActiveTag = null;
//         this.classList.remove('active');
//         resetFilter();
//         return;
//       }

//       // Убираем активность со всех тегов
//       filterItems.forEach(item => item.classList.remove('active'));

//       // Устанавливаем новый активный тег
//       currentActiveTag = clickedTag;
//       this.classList.add('active');

//       // Применяем фильтр
//       applyFilter(clickedTag);
//     });
//   });

//   // Функция применения фильтра
//   function applyFilter(tag) {
//     blogCards.forEach(card => {
//       const cardTags = card.dataset.tags.split(' ');
//       if (cardTags.includes(tag)) {
//         card.style.display = 'block'; // или 'list-item' для li
//       } else {
//         card.style.display = 'none';
//       }
//     });
//   }

//   // Функция сброса фильтра
//   function resetFilter() {
//     blogCards.forEach(card => {
//       card.style.display = 'block'; // или 'list-item' для li
//     });
//   }
// });











document.addEventListener('DOMContentLoaded', function () {
  const filterLinks = document.querySelectorAll('.page-blog__filter-item a');
  const cards = document.querySelectorAll('.page-blog__cards-item');
  let activeFilter = null;

  filterLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const tag = this.dataset.tag;

      // Если клик по активному фильтру - сброс
      if (activeFilter === tag) {
        this.classList.remove('is-active');
        activeFilter = null;
        cards.forEach(card => card.style.display = 'block');
        return;
      }

      // Снимаем класс со всех
      filterLinks.forEach(item => item.classList.remove('is-active'));

      // Добавляем класс только к этому пункту
      this.classList.add('is-active');
      activeFilter = tag;

      // Фильтрация карточек (не затрагивает класс is-active)
      cards.forEach(card => {
        card.style.display = card.dataset.tags.includes(tag) ? 'block' : 'none';
      });
    });
  });
});