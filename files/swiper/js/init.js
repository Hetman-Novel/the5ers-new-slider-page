document.addEventListener('DOMContentLoaded', function () {
   const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Получаем все изображения с атрибутом loading="lazy"
   function addLoadedClass(image) { // Функция для добавления класса к родителю изображения после его загрузки
      const parentElement = image.parentElement;
      if (image.complete) { // Проверяем, загружено ли изображение
         parentElement.classList.add('loaded');
      } else {
         image.addEventListener('load', function() { // Добавляем событие load, чтобы добавить класс после загрузки изображения
            parentElement.classList.add('loaded');
         });
      }
   }
   lazyImages.forEach(addLoadedClass); // Перебираем все изображения и вызываем функцию addLoadedClass для каждого
});

/* === */

function initializeSlider(sliderId, prevBtnId, nextBtnId) {
   const slider = document.getElementById(sliderId);
   if (slider) {
      new Swiper(slider, {
         navigation: {
            prevEl: `#${prevBtnId}`,
            nextEl: `#${nextBtnId}`,
         },
         watchOverflow: true,
         spaceBetween: 20,
         loop: true,
         speed: 800,
         effect: 'slide',
         slidesPerView: 4.345,
         breakpoints: {
            0: {
               spaceBetween: 15,
               slidesPerView: 1,
            },
            401: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 3.345,
               spaceBetween: 20,
            },
            1201: {
               slidesPerView: 4.345,
            }
         }
      });
   }
}