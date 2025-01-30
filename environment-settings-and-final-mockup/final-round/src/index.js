// // Переменные для отслеживания активного модального окна и меню
// let activeModal = null;
// const menu = document.getElementById('menu__dropdown');
// // const menuToggle = document.querySelectorAll('.menu-toggle');
// // const menutOOgle = document.getElementById('menu-toggle')

// // Функция для работы с модальными окнами
// function toggleModal(modalId) {
//     const modal = document.getElementById(modalId);

//     if (activeModal && activeModal !== modal) {
//         activeModal.classList.remove('active'); // Закрываем другое модальное окно
//     }

//     modal.classList.toggle('active');
//     activeModal = modal.classList.contains('active') ? modal : null; // Устанавливаем активное окно

//     const links = menu.querySelectorAll('.nav__link');
//     links.forEach(link => {
//         link.addEventListener('click', () => {
//             menu.classList.remove('active');
//             activeModal = null;
//         });
//     });
// }

// // Функция для вызова/скрытия меню через кнопку
// // menuToggle.addEventListener('click', () => {
// //     menu.classList.toggle('active');

// //     menutOOgle.addEventListener('click', () =>{
// //         menu.classList.toggle('active')
// //     })
// // });

// // Закрытие меню при клике на любое модальное окно
// document.addEventListener('click', (e) => {
//     if (activeModal && !activeModal.contains(e.target) && e.target !== menuToggle) {
//         activeModal.classList.remove('active');
//         activeModal = null;
//     }
// });




// // Инициализация элементов
// const sidebar = document.querySelector('.aside-container'); // Сайдбар
// const toggleButton = document.getElementById('menu-toggle');

// // Функция для работы с сайдбаром
// function toggleSidebar() {
//     if (window.innerWidth < 900) { // Проверяем ширину экрана
//         sidebar.classList.toggle('active'); // Показываем или скрываем меню
//     }
// }



// // Закрытие сайдбара при клике вне его
// function closeSidebarOnClickOutside(event) {
//     const isClickInsideSidebar = sidebar.contains(event.target);
//     const isClickOnButton = toggleButton.contains(event.target);

//     if (!isClickInsideSidebar && !isClickOnButton && sidebar.classList.contains('active')) {
//         sidebar.classList.remove('active');
//     }
// }

// // Добавляем обработчик события на кнопку
// toggleButton.addEventListener('click', toggleSidebar);
// // Добавляем обработчик события на документ
// document.addEventListener('click', closeSidebarOnClickOutside);

let activeModal = null;

// Открытие/закрытие модального окна
function toggleModal(id) {
    const modal = document.getElementById(id);

    if (modal) {
        if (modal === activeModal) {
            modal.classList.remove('active');
            activeModal = null;
        } else {
            if (activeModal) {
                activeModal.classList.remove('active');
            }
            modal.classList.add('active');
            activeModal = modal;
        }
    } else {
        console.error(`Модальное окно с id "${id}" не найдено.`);
    }
}

// Закрытие модального окна при клике вне его
document.addEventListener('click', (e) => {
    if (activeModal && !activeModal.contains(e.target) && !e.target.closest('.button--hover')) {
        activeModal.classList.remove('active');
        activeModal = null;
    }
});

//show and hidden block//
function checkingElements() {
    const block = document.querySelectorAll(".block");
    const card__block = document.querySelectorAll(".card__block");
    const show__btn = document.querySelector(".show__btn");
    const toggleDisplay = (elements) => {
      elements.forEach((element) => {
        element.style.display =
          element.style.display === "none" || element.style.display === ""
            ? "block"
            : "none";
      });
    };

    show__btn.addEventListener("click", () => {
      const resolution = window.innerWidth;
      toggleDisplay(card__block);
      if (resolution < 1024) {
        toggleDisplay(block);
      }
    });
  }

  checkingElements();

  function checkingBlockElements() {
    const repairBlock = document.querySelectorAll(".repair__block");
    const repairCardBlock = document.querySelectorAll('.repair__card-block');
    const showAll = document.querySelector('.show__all-btn');

    const toggleCard = (elements) => {
      elements.forEach((element) =>{
        element.style.display =
        element.style.display === "none" || element.style.display === ""
        ? "block"
        : "none";
      });
    };

    showAll.addEventListener("click", () =>{
      const resolution = window.innerWidth;

      toggleCard(repairCardBlock);
      if (resolution < 1024) {
        toggleCard(repairBlock)
      }
    });
  }

  checkingBlockElements();

  const hiddenTextSecond = document.querySelector(".about__text__part-second");
  const hidenTextThird = document.querySelector(".about__text__part-third");
  const toggleButton = document.querySelector(".about-show__btn");

  toggleButton.addEventListener("click", () =>{
    if (hiddenTextSecond.style.display === "none" || hiddenTextSecond.style.display === ""){
      hiddenTextSecond.style.display = "inline";
      hidenTextThird.style.display = "inline"
      // toggleButton.textContent = "HIDDEN TEXT"
    }else{
        hiddenTextSecond.style.display = "none";
        hidenTextThird.style.display = "none";

      // toggleButton.textContent = "SHOW MORE"
    }
  });



