// Функция для инициализации Slick Slider
function initSlickSlider() {
    $('.advantages__main-grid').slick({
      arrows: false,
      dots: true,
      infinite: false
    });
  }
  
  $(document).ready(function() {
    // Проверяем ширину экрана при загрузке страницы
    if ($(window).width() < 642) {
      initSlickSlider(); // Инициализируем слайдер
    }
  });
  
  // Проверяем ширину экрана при изменении размера окна
  $(window).on('resize', function() {
    if ($(window).width() < 642) {
      if (!$('.advantages__main-grid').hasClass('slick-initialized')) {
        initSlickSlider(); // Инициализируем слайдер, если он еще не инициализирован
      }
    } else {
      if ($('.advantages__main-grid').hasClass('slick-initialized')) {
        $('.advantages__main-grid').slick('unslick'); // Удаляем слайдер, если ширина экрана больше 642
      }
    }
  });

  function initGuaranteeSlider() {
    $('.guarantee__grid').slick({
      arrows: true,
      dots: false,
      infinite: false
    });
  }
  
  $(document).ready(function() {
    // Проверяем ширину экрана при загрузке страницы
    if ($(window).width() < 642) {
      initGuaranteeSlider(); // Инициализируем слайдер
    }
  });
  
  // Проверяем ширину экрана при изменении размера окна
  $(window).on('resize', function() {
    if ($(window).width() < 642) {
      if (!$('.guarantee__grid').hasClass('slick-initialized')) {
        initGuaranteeSlider(); // Инициализируем слайдер, если он еще не инициализирован
      }
    } else {
      if ($('.guarantee__grid').hasClass('slick-initialized')) {
        $('.guarantee__grid').slick('unslick'); // Удаляем слайдер, если ширина экрана больше 642
      }
    }
  });