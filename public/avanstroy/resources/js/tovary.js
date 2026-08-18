 // Получаем видимую часть слайда
 let viewport = document.getElementById("viewport").offsetWidth;
 // Получаем кнопку вперёд
 let btnNext = document.getElementById("next");
 // Получаем кнопку назад
 let btnPrev = document.getElementById("prev");
 // Получаем элемент со всеми слайдами
 let slider = document.querySelector("div.slider");
 // Получаем элементы показа слайда
 let viewSliders = document.querySelectorAll(".viewSlide");
 // Объявляем переменную номера слайда
 let viewSlide = 0;
  
  
 // Обработка клика на кнопку вперёд
 btnNext.addEventListener("click", function () {
 
     // Условие, если номер слайда меньше четырёх
     if (viewSlide < 1) { // Если верно то
         // Увеличиваем номер слайда на один
         viewSlide++;
     } else { // Иначе
         // Номер слайда равен нулю
         viewSlide = 0;
     }
 
     // Меняем позицию всего слайда
     slider.style.left = -viewSlide * viewport + "px";
 });
  
 // Обработка клика на кнопку назад
 btnPrev.addEventListener("click", function () {
 
     // Условие, если номер слайда больше нуля
     if (viewSlide > 0) { // Если верно то
         // Уменьшаем номер слайда
         viewSlide--; 
     } else { // Иначе
         // Номер слайда равен четырём
         viewSlide = 3; 
     }
     // Меняем позицию всего слайда
     slider.style.left = -viewSlide * viewport + "px";
 });