document.addEventListener('DOMContentLoaded', function () {
   
   const iconMenu = document.querySelector('.menu__icon');
   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         iconMenu.classList.toggle('_active');
         let newSliderPageSidebar = document.getElementById('new-slider-page-sidebar')
         if (newSliderPageSidebar) {
            newSliderPageSidebar.classList.toggle('show');
         }
      });
   }
});