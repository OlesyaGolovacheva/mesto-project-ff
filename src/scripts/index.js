import '../pages/index.css';
import {handleLike, createCard, handleDelete} from './card.js';
import {openModal, closePopup, displayLoading, hideLoading} from './modal.js';
import {enableValidation, clearValidation} from './validation.js';
import {getAllCards, getProfileData, setProfileDataApi, postNewCardApi, setProfileImageApi} from './api.js';

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const formEditUserInfo = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const formAddElement = document.querySelector('.popup_type_new-card');
const titleInput = document.querySelector('.popup__input_type_card-name');
const urlInput = document.querySelector('.popup__input_type_url');
const profileTitle = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__description');
const profileEditImageButton = document.querySelector('.profile__image');
const formEditUserImage = document.querySelector('.popup_type_edit-profile-image');
const avatarInput = document.querySelector('#image-link-input');
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

Promise.all([getProfileData(), getAllCards()])
.then(([profileDataResponse, cardsInfoResponse]) => {
  setProfileInfo(profileDataResponse);
  const userId = profileDataResponse._id;
  renderInitialCards(cardsInfoResponse, userId);
})
.catch((err) => {
  console.log(err);
});

function setProfileInfo(data){
  profileTitle.textContent = data.name;
  profileAbout.textContent = data.about;
  document.querySelector('.profile__image').style.backgroundImage = `url(${data.avatar})`;
}

function renderInitialCards(data, userId) {
  data.forEach((cardData) => {
    cardData.userId = userId;
    const card = createCard(cardData, 
          (event) => handleDelete(event, cardData._id), 
          (event) => handleLike(event, cardData._id), 
          handleImageClick);
    cardsContainer.append(card);
  });
};

profileEditButton.addEventListener('click', function (evt) {
  const popup = document.querySelector('.popup_type_edit');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileAbout.textContent;
  clearValidation(popup, validationConfig);
  openModal(popup);
});

cardAddButton.addEventListener('click', function (evt) {
  const popup = document.querySelector('.popup_type_new-card');
  clearValidation(popup, validationConfig);
  openModal(popup);
});

profileEditImageButton.addEventListener('click', function (evt) {
  const popup = document.querySelector('.popup_type_edit-profile-image');
  clearValidation(popup, validationConfig);
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
  if (!formEditUserInfo.querySelector('.popup__button').classList.contains('popup__button_disabled')){
    displayLoading(formEditUserInfo);
    const profile = {name: nameInput.value, about: jobInput.value};
    setProfileDataApi(profile).then((result) => {
      profileTitle.textContent = result.name;
      profileAbout.textContent = result.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      hideLoading(formEditUserInfo);
      closePopup(formEditUserInfo);
    });
  }
}

function handleFormSubmitEditImage(evt) {
  evt.preventDefault();
  if (!formEditUserImage.querySelector('.popup__button').classList.contains('popup__button_disabled')){
    displayLoading(formEditUserImage);
    const profileData = {avatar: avatarInput.value};
    setProfileImageApi(profileData).then((result) => {
      document.querySelector('.profile__image').style.backgroundImage = `url(${result.avatar})`;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      hideLoading(formEditUserImage);
      closePopup(formEditUserImage);
    });
  }
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const cardData = {name: titleInput.value, link: urlInput.value};
  const inputListAddForm = Array.from(formAddElement.querySelectorAll('.popup__input'));
  if (!formAddElement.querySelector('.popup__button').classList.contains('popup__button_disabled')){
    displayLoading(formAddElement);
    postNewCardApi(cardData).then((response) => {
      response.userId = response.owner._id;
      const card = createCard(response, 
        (event) => handleDelete(event, response._id), 
        (event) => handleLike(event, response._id),
         handleImageClick);
      cardsContainer.prepend(card);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      hideLoading(formAddElement);
      closePopup(formAddElement);
    });
  }
  evt.target.reset();
}

formEditUserInfo.addEventListener('submit', handleFormSubmitEdit);
formEditUserImage.addEventListener('submit', handleFormSubmitEditImage);
formAddElement.addEventListener('submit', handleFormSubmitAdd);

enableValidation(validationConfig); 