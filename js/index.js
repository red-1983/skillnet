let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header-nav__toggle');
let pageHeader = document.querySelector('.page-header');
let popup = document.querySelector('.page-popup');
let btnOpenPopup = document.querySelector('.main-button');
let btnClosePopup = document.querySelector('.popup__button--close');
let popupUser = document.querySelector('[name=popup_user]');
let bodyNone = document.querySelector('.container');

/*Открытие бургер меню*/
navMain.classList.remove('header-nav--nojs');
navToggle.addEventListener('click', function(){
  if (navMain.classList.contains('header-nav--closed')) {
    navMain.classList.remove('header-nav--closed');
    navMain.classList.add('header-nav--opened');
    pageHeader.classList.add('page-header--opened')
  } else {
    navMain.classList.add('header-nav--closed');
    navMain.classList.remove('header-nav--opened');
    pageHeader.classList.remove('page-header--opened');
  }
})
/*Открытие попапа*/
    btnOpenPopup.addEventListener("click", function() {
  popup.classList.toggle("page-popup_open");
  bodyNone.classList.add('display__none');
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
    bodyNone.classList.remove('display__none');
  }
}

})
