const cardTemplate = document.querySelector('#card-template').content;

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
  event.target.closest('.card').remove();
}

export function handleLike(event) {
  event.target.classList.toggle('card__like-button_is-active');
}