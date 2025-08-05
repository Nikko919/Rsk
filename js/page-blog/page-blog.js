document.addEventListener('DOMContentLoaded', function () {
  const filterItems = document.querySelectorAll('.page-blog__filter-item a');
  const blogCards = document.querySelectorAll('.page-blog__cards-item');
  let currentActiveTag = null;

  // Обработчик клика по тегам фильтра
  filterItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const clickedTag = this.dataset.tag;

      // Если кликнули по активному тегу - сброс
      if (currentActiveTag === clickedTag) {
        currentActiveTag = null;
        this.classList.remove('active');
        resetFilter();
        return;
      }

      // Убираем активность со всех тегов
      filterItems.forEach(item => item.classList.remove('active'));

      // Устанавливаем новый активный тег
      currentActiveTag = clickedTag;
      this.classList.add('active');

      // Применяем фильтр
      applyFilter(clickedTag);
    });
  });

  // Функция применения фильтра
  function applyFilter(tag) {
    blogCards.forEach(card => {
      const cardTags = card.dataset.tags.split(' ');
      if (cardTags.includes(tag)) {
        card.style.display = 'block'; // или 'list-item' для li
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Функция сброса фильтра
  function resetFilter() {
    blogCards.forEach(card => {
      card.style.display = 'block'; // или 'list-item' для li
    });
  }
});