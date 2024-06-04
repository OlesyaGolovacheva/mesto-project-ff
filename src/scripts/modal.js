export {openModal, closePopup}

function openModal(popup){
  const buttonClose = popup.querySelector('.popup__close');
  popup.classList.add('popup_is-animated', 'popup_is-opened');
  document.addEventListener('keydown', closeEscape);
  buttonClose.addEventListener('click', closeOpenedPopup);
  popup.addEventListener('mousedown', closeClickOverlay);
}
  
function closePopup(popup){
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeEscape);
  popup.removeEventListener('click', closeOpenedPopup);
  popup.removeEventListener('mousedown', closeClickOverlay);
}

function closeEscape(evt){
  if(evt.key === "Escape"){
    closeOpenedPopup(evt)
  }
}
  
function closeOpenedPopup(evt){
  const popupOpened = document.querySelector('.popup_is-opened');
  closePopup(popupOpened);
}
  
function closeClickOverlay(evt){
  if (evt.currentTarget === evt.target) {
    closeOpenedPopup(evt)
  }
}

export function displayLoading(popup){
  popup.querySelector('.popup__button').textContent = 'Сохранение...';
}

export function hideLoading(popup){
  popup.querySelector('.popup__button').textContent = 'Сохранить';
}