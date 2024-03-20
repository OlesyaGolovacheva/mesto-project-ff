// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы

const cardsContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(cardData, onDelete) {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardElement.querySelector('.card__image').alt = cardData.name;
    cardElement.querySelector('.card__image').src = cardData.link;
    deleteButton.addEventListener('click', onDelete);
    
    return cardElement;
};

// @todo: Функция удаления карточки

function handleDelete(event) {
    event.target.closest('.card').remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((cardData) => {
    const card = createCard(cardData, handleDelete);
    cardsContainer.append(card);
});