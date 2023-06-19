const navMain = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');
const pageHeader = document.querySelector('.page-header');
const popup = document.querySelector('.page-popup');
const btnOpenPopup = document.querySelector('.main-button');
const btnClosePopup = document.querySelector('.popup__button--close');
const popupUser = document.querySelector('[name=popup_user]');


/*Открытие бургер меню*/
navMain.classList.remove('header-nav--nojs');
navToggle.addEventListener('click', function(){
  if (navMain.classList.contains('header-nav--closed')) {
    navMain.classList.remove('header-nav--closed');
    pageHeader.classList.remove('header-nav--closed');
    navMain.classList.add('header-nav--opened');

  } else {
    navMain.classList.add('header-nav--closed');
    navMain.classList.remove('header-nav--opened');
    pageHeader.classList.add('header-nav--closed');
  }
})


/*Открытие попапа*/
    btnOpenPopup.addEventListener("click", function() {
  popup.classList.toggle("page-popup_open");
  popupUser.focus();


})
/*Закрытие попапа*/
btnClosePopup.addEventListener("click", function() {
  popup.classList.toggle("page-popup_open");
  bodyNone.classList.remove('display__none');
})
/*Закрытие попапа через esc*/
window.addEventListener('keydown', function(evt) {
if (evt.keyCode === 27){
  evt.preventDefault();
  if (popup.classList.contains("page-popup_open")) {
    popup.classList.remove("page-popup_open");

  }
}

})
/*Закрытие попапа через click вне попапа*/
window.addEventListener('click', (evt) =>{


const target = evt.target;

    if (!target.closest('.page-popup') && !target.closest('.main-button')) {

         popup.classList.remove('page-popup_open');

    }

})
/*валидация формы попапа*/
const popupForm = document.querySelector('.popup__form');

popupForm.setAttribute('novalidate', '');//если js  не загрузился то валидация браузером

const popupInfo = document.querySelector('.popup__info');
const RegExpText = /^[A-Za-zA-Яа-яЁё\s]{3,16}/;
const RegExpEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu ;
const validateInput = (elem) => {

if (elem.type ==='text'){
if(!RegExpText.test(elem.value) && !elem.value ==''){
elem.nextElementSibling.textContent = 'Введите только русские или латинские символы (минимально 3 максимально 16)';
} else {
elem.nextElementSibling.textContent = '';
}

}

if (elem.type ==='email'){
if(!RegExpEmail.test(elem.value) && !elem.value ==''){
elem.nextElementSibling.textContent = 'Введите только русские или латинские символы (минимально 3 максимально 16)';
} else {
elem.nextElementSibling.textContent = '';
}

}

}

for (let elem of popupInfo.elements) {
elem.addEventListener('blur', () => {
	validateInput(elem);
})

}




popupForm.addEventListener('submit', (even) =>{
  even.preventDefault();
  for (let elem of popupInfo.elements) {

if (elem.value ==''){
    elem.nextElementSibling.textContent = 'Заполните пожалуйства поля';
  } else {elem.nextElementSibling.textContent = '';
	validateInput(elem);
}
}

}  )

/*валидация input file*/

const popupFile = document.querySelector('input[type="file"]');

const RegEXpFile = /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;

const validatefile = (fileValue) => {
if (!RegEXpFile.test(fileValue)) {
console.log('выбран не правильный формат файла')
}
}

popupFile.addEventListener('input', () => {
	const fileValue = popupFile.value
	validatefile(fileValue);
})







