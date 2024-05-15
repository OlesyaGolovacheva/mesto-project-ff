export {openModal, closePopup}
function openModal(popup){
  const buttonClose = popup.querySelector('.popup__close');
  popup.classList.add('popup_is-animated', 'popup_is-opened');
  document.addEventListener('keydown', closeEscape);
  buttonClose.addEventListener('click', closeModal);
  popup.addEventListener('mousedown', closeClickOverlay);
}
  
function closePopup(popup){
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeEscape);
  popup.removeEventListener('click', closeModal);
  popup.removeEventListener('mousedown', closeClickOverlay);
}

function closeEscape(evt){
  if(evt.key === "Escape"){
    closeModal(evt)
  }
}
  
function closeModal(evt){
  const popupOpened = document.querySelector('.popup_is-opened');
  closePopup(popupOpened);
}
  
function closeClickOverlay(evt){
  if (evt.currentTarget === evt.target) {
    closeModal(evt)
  }
}