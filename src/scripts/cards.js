export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];
import {openModal, closePopup} from './modal.js';
import {cardsContainer} from './index.js';

const popupEditForm = document.querySelector('.profile__edit-button');
const popupImage = document.querySelector('.places__list');
const popupAddCard = document.querySelector('.profile__add-button');
const formEditElement = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const formAddElement = document.querySelector('.popup_type_new-card');
const titleInput = document.querySelector('.popup__input_type_card-name');
const urlInput = document.querySelector('.popup__input_type_url');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const cardTemplate = document.querySelector('#card-template').content;

popupEditForm.addEventListener('click', function (evt) {
  const popup = document.querySelector('.popup_type_edit');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popup);
});

popupAddCard.addEventListener('click', function (evt) {
  const popup = document.querySelector('.popup_type_new-card');
  openModal(popup);
});

export function createCard(cardData, onDelete, onLike, onImageClick) {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const imageClick = cardElement.querySelector('.card__image');

    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardElement.querySelector('.card__image').alt = cardData.name;
    cardElement.querySelector('.card__image').src = cardData.link;
    deleteButton.addEventListener('click', onDelete);
    likeButton.addEventListener('click', onLike);
    imageClick.addEventListener('click', onImageClick);
    
    return cardElement;
};

export function handleDelete(event) {
    event.target.classList('.card').remove();
}

export function handleLike(event) {
  event.target.classList.toggle('card__like-button_is-active');
}

export function handleImageClick(event) {
  const popup = document.querySelector('.popup_type_image');
  const popupImgCaption = document.querySelector('.popup__caption');
  const popupImgUrl = document.querySelector('.popup__image');
  popupImgCaption.textContent = event.target.alt;
  popupImgUrl.src = event.target.src;
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
  initialCards.unshift(cardData);
  closePopup(formAddElement);
  const card = createCard(cardData, handleDelete);
  cardsContainer.prepend(card);
}

formEditElement.addEventListener('submit', handleFormSubmitEdit);
formAddElement.addEventListener('submit', handleFormSubmitAdd);
