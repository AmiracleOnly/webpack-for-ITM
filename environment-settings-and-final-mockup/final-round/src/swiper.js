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



