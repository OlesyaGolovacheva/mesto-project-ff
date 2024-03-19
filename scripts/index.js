// @todo: Темплейт карточки

// @todo: DOM узлы

const cardsContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки

function addCard(cartData, onDelete) {

    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__title').textContent = cartData.name;
    cardElement.querySelector('.card__image').setAttribute('src', cartData.link);
    deleteButton.addEventListener('click', onDelete);
    
    return cardElement;
};

// @todo: Функция удаления карточки

function handleDelete(event) {
    event.target.closest('.card').remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((cartData) => {
    const card = addCard(cartData, handleDelete);
    cardsContainer.append(card);
});