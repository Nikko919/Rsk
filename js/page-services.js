document.addEventListener('DOMContentLoaded', function () {
  let selectedCategory = 'квартира'; // По умолчанию выбрана "квартира"
  let selectedTags = [];

  const categoryFilters = document.querySelectorAll('.category-filter');
  const tagFilters = document.querySelectorAll('.tag-filter');
  const serviceCards = document.querySelectorAll('.page-services__card-inner');

  // Автоматически активируем кнопку "квартира" при загрузке
  const defaultCategoryBtn = document.querySelector('.category-filter[data-category="квартира"]');
  if (defaultCategoryBtn) {
    defaultCategoryBtn.classList.add('is-active');
  }

  // Фильтр по категории
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', function (e) {
      e.preventDefault();

      categoryFilters.forEach(f => f.classList.remove('is-active'));
      this.classList.add('is-active');
      selectedCategory = this.dataset.category;
      selectedTags = []; // Сброс тегов
      tagFilters.forEach(f => f.classList.remove('is-active'));

      filterServices();
    });
  });

  // Фильтр по тегам
  tagFilters.forEach(filter => {
    filter.addEventListener('click', function (e) {
      e.preventDefault();

      if (!selectedCategory) return;

      this.classList.toggle('is-active');
      const tag = this.dataset.tag;

      if (this.classList.contains('is-active')) {
        if (!selectedTags.includes(tag)) {
          selectedTags.push(tag);
        }
      } else {
        selectedTags = selectedTags.filter(t => t !== tag);
      }

      filterServices();
    });
  });

  // Функция фильтрации
  function filterServices() {
    serviceCards.forEach(card => {
      const cardCategory = card.dataset.category;
      const cardTags = card.dataset.tags.split(' ');

      // Проверяем категорию и теги
      const showCard = cardCategory === selectedCategory &&
        (selectedTags.length === 0 || selectedTags.some(tag => cardTags.includes(tag)));

      card.style.display = showCard ? 'block' : 'none';
    });
  }

  // Первоначальная фильтрация (покажет только "квартиры")
  filterServices();
});