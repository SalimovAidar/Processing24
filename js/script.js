// const popupLinks = document.querySelectorAll('.item__link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeout = 800;

// if (popupLinks.length > 0) {
//   for (let i = 0; i < popupLinks.length; i++) {
//     const popupLink = popupLinks[i];
//     popupLink.addEventListener("click", function (e) {
//       const popupName = popupLink.getAttribute('href').replace('#', '');
//       const currentPopup = document.getElementById(popupName);
//       console.log(currentPopup)
//       popupOpen(currentPopup);
//       e.preventDefault();
//     });
//   }
// }

// const popupCloseIcon = document.querySelectorAll('.popup__close');
// if (popupCloseIcon.length > 0) {
//   for (let i = 0; i < popupCloseIcon.length; i++) {
//     const el = popupCloseIcon[i];
//     el.addEventListener("click", function (e) {
//       popupClose(el.closest('.popup'));
//       e.preventDefault();
//     });
//   }
// }

// function popupOpen(currentPopup) {
//   if (currentPopup && unlock) {
//     const popupActive = document.querySelector('.popup.open');
//     if (popupActive) {
//       popupClose(popupActive, false);
//     } else {
//       bodyLock();
//     }
//     currentPopup.classList.add('open');
//     currentPopup.addEventListener('click', function (e) {
//       if (!e.target.closest('.popup__content')) {
//         popupClose(e.target.closest('.popup'));
//       }
//     });
//   }
// }

// function popupClose(popupActive, doUnlock = true) {
//   if (unlock) {
//     popupActive.classList.remove('open');
//     if (doUnlock) {
//       bodyUnLock();
//     }
//   }
// }

// function bodyLock() {
//   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//   if (lockPadding.length > 0) {
//     for (let i = 0; i < lockPadding.length; i++) {
//       const el = lockPadding[i];
//       el.getElementsByClassName.paddingRight = lockPaddingValue;
//     }
//   }
//   body.style.paddingRight = lockPaddingValue;
//   body.classList.add('lock');

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }

// function bodyUnLock() {
//   setTimeout(function () {
//     if (lockPadding.length > 0) {
//       for (let i = 0; i < lockPadding.length; i++) {
//         const el = lockPadding[i];
//         el.style.paddingRight = '0px';
//       }
//     }
//     body.style.paddingRight = '0px';
//     body.classList.remove('lock');
//   }, timeout);

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }

// Функция для отображения значений, после изменения типа топлива
document.querySelector('.calculator__select').addEventListener('input', () => {
  let liter = 0;
  let cost = 49.59;
  let data = document.querySelector('.range__input').value;
  let price = document.querySelector('.calculator__select').value;
  if (price == 'ДТ ЕВРО-5') {
    liter = 44.43
  }
  else if (price == 'ДТ ЕВРО-4' || price == 'АИ-95 ЕВРО-4') {
    liter = 40.67
  }
  else if (price == 'АИ-95 ЕВРО-5') {
    liter = 43.98
  }
  else if (price == 'АИ-95 ЕВРО-3') {
    liter = 41.64
  }
  let letres = data * liter;
  let benefit = data * (cost - liter);
  document.querySelector('.range__count').innerHTML = data; // количество литров
  document.querySelector('.result__sum').innerHTML = letres.toFixed(2); // итоговая сумма
  document.querySelector('.price__liter').innerHTML = liter; // стоимость литра бензина
  document.querySelector('.result__benefit').innerHTML = benefit.toFixed(2); // выгода
});

// Функция для отображения значений, после изменения положения ползунка
document.querySelector('.range__input').addEventListener('input', () => {
  let liter = 0;
  let cost = 49.59;
  let data = document.querySelector('.range__input').value;
  let price = document.querySelector('.calculator__select').value;
  if (price == 'ДТ ЕВРО-5') {
    liter = 44.43
  }
  else if (price == 'ДТ ЕВРО-4' || price == 'АИ-95 ЕВРО-4') {
    liter = 40.67
  }
  else if (price == 'АИ-95 ЕВРО-5') {
    liter = 43.98
  }
  else if (price == 'АИ-95 ЕВРО-3') {
    liter = 41.64
  }
  let letres = data * liter;
  let benefit = data * (cost - liter);
  document.querySelector('.range__count').innerHTML = data; // количество литров
  document.querySelector('.result__sum').innerHTML = letres.toFixed(2); // итоговая сумма
  document.querySelector('.price__liter').innerHTML = liter; // стоимость литра бензина
  document.querySelector('.result__benefit').innerHTML = benefit.toFixed(2); // выгода
});

$(document).ready(function () {
  $('.certificate__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    appendArrows: $('.certificate__buttons'),
  });
});

$(document).ready(function () {
  $('.partners__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    variableWidth: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
  });
});

$(document).ready(function () {
  $('.reviews__slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    appendArrows: $('.reviews__buttons'),
  });
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
};

function closeForm() {
  document.getElementById("myForm").style.display = "none";
};