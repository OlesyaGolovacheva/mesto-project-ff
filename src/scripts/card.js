import {deleteCardApi, putLikeApi, deleteLikeApi} from './api.js'
const cardTemplate = document.querySelector('#card-template').content;

export function createCard(cardData, onDelete, onLike, onImageClick) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const imageClick = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElement.querySelector('.card__image').alt = cardData.name;
  cardElement.querySelector('.card__image').src = cardData.link;
  
  if(cardData.likes && cardData.likes.length > 0){
    cardElement.querySelector('.card__like-counter').textContent = cardData.likes.length;
  }

  cardData.likes.forEach((like) => {
    if(cardData.likes.some(like => cardData.userId == like._id)){ 
      likeButton.classList.add("card__like-button_is-active"); 
    }
  });
  
  if(cardData.owner._id != cardData.userId){
    deleteButton.remove();
  }else{
    deleteButton.addEventListener('click', onDelete);
  }
  
  likeButton.addEventListener('click', onLike);
  imageClick.addEventListener('click', onImageClick);
    
  return cardElement;
};


export function handleDelete(event, cardId) {
  
  deleteCardApi(cardId).then( (response) => {
    event.target.closest('.card').remove();
  })
  .catch((err) => {
    console.log(err);
  });
}

export function handleLike(event, cardId) {
  const likeElement = event.target.closest('.card__like-container').querySelector('.card__like-counter');
  const likeMethod = event.target.classList.contains('card__like-button_is-active') ? deleteLikeApi : putLikeApi;
  likeMethod(cardId) 
  .then((response) => { 
      likeElement.textContent = response.likes.length || ''; 
      event.target.classList.toggle("card__like-button_is-active"); 
    })
  .catch(err => console.log(err));
}