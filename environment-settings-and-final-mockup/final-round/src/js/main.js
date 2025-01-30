import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import '../index.js';
import'../swiper.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';



let swiper = null;

function initSwiper() {
  const isSmallScreen = window.innerWidth < 768;

  if (isSmallScreen && !swiper) {
    swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      updateOnWindowResize: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });
    // console.log("Swiper инициализирован:", swiper);

  } else  {
      if (!isSmallScreen && swiper)
      // Уничтожение Swiper для больших экранов
        if (swiper.destroy) {
          swiper.destroy(true, true); // Проверяем наличие destroy
        }
        swiper = null;
        // console.log("Swiper уничтожен");
           // Полный сброс стилей
           const swiperWrapper = document.querySelector(".swiper-wrapper");
           if (swiperWrapper) {
             swiperWrapper.style.transform = "";
           }
  }
}

// Запуск Swiper при загрузке
initSwiper();
window.addEventListener("resize", () => {
  initSwiper();
  if(swiper && typeof swiper.update === "function")  {
    swiper.update(); // Обновляет размеры и положение
  }
});
// console.log("Initializing Swiper...", window.innerWidth);
// console.log("Swiper instance:", swiper);
// console.log("Is small screen:", isSmallScreen);



// Переменные для отслеживания активного модального окна и меню
let activeModal = null;
const menu = document.getElementById('menu__dropdown');
// const menuToggle = document.querySelectorAll('.menu-toggle');
// const menutOOgle = document.getElementById('menu-toggle')

// Функция для работы с модальными окнами
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);

    if (activeModal && activeModal !== modal) {
        activeModal.classList.remove('active'); // Закрываем другое модальное окно
    }

    modal.classList.toggle('active');
    activeModal = modal.classList.contains('active') ? modal : null; // Устанавливаем активное окно

    const links = menu.querySelectorAll('.nav__link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            activeModal = null;
        });
    });
}

// Функция для вызова/скрытия меню через кнопку
// menuToggle.addEventListener('click', () => {
//     menu.classList.toggle('active');

//     menutOOgle.addEventListener('click', () =>{
//         menu.classList.toggle('active')
//     })
// });

// Закрытие меню при клике на любое модальное окно
document.addEventListener('click', (e) => {
    if (activeModal && !activeModal.contains(e.target)) {
        activeModal.classList.remove('active');
        activeModal = null;
    }
});


// Инициализация элементов
const sidebar = document.querySelector('.aside-container'); // Сайдбар
// const toggleButton = document.getElementById('menu-toggle');

// Функция для работы с сайдбаром
function toggleSidebar() {
    if (window.innerWidth < 900) { // Проверяем ширину экрана
        sidebar.classList.toggle('active'); // Показываем или скрываем меню
    }
}





