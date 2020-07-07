'use strict';

const modalAdd = document.querySelector('.modal__add');
const addAd = document.querySelector('.add__ad');
const modalBtnSubmit = document.querySelector('.modal__btn-submit');
const modalSubmit = document.querySelector('.modal__submit');

addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true; //блокируем кнопку Отправить
});

modalAdd.addEventListener('click', event => {
    const target = event.target;
   
    if(target.classList.contains('modal__close') || target === modalAdd) {
        modalAdd.classList.add('hide');
        console.log(modalAdd);
        modalSubmit.reset();//сбрасываются введенные в форму данные, когда вкл.выкл модальное окно
    }
});
