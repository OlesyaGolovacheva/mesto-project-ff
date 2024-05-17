import '../pages/index.css'; // добавьте импорт главного файла стилей

import {initialCards} from './cards.js';
import {handleLike, createCard, handleDelete} from './card.js';
import {openModal, closePopup} from './modal.js';

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const formEditElement = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const formAddElement = document.querySelector('.popup_type_new-card');
const titleInput = document.querySelector('.popup__input_type_card-name');
const urlInput = document.querySelector('.popup__input_type_url');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// @todo: Вывести карточки на страницу

initialCards.forEach((cardData) => {
    const card = createCard(cardData, handleDelete, handleLike, handleImageClick);
    cardsContainer.append(card);
});

profileEditButton.addEventListener('click', function (evt) {
  const popup = document.querySelector('.popup_type_edit');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popup);
});

profileAddButton.addEventListener('click', function (evt) {
  const popup = document.querySelector('.popup_type_new-card');
  openModal(popup);
});

function handleImageClick(event) {
  const popup = document.querySelector('.popup_type_image');
  const popupImgCaption = document.querySelector('.popup__caption');
  const popupImgContent = document.querySelector('.popup__image');
  popupImgCaption.textContent = event.target.alt;
  popupImgContent.src = event.target.src;
  popupImgContent.alt = event.target.alt;
  openModal(popup);
}

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(formEditElement);
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const cardData = {name: titleInput.value, link: urlInput.value};
  closePopup(formAddElement);
  const card = createCard(cardData, handleDelete);
  cardsContainer.prepend(card);
  evt.target.reset()
}

formEditElement.addEventListener('submit', handleFormSubmitEdit);
formAddElement.addEventListener('submit', handleFormSubmitAdd);