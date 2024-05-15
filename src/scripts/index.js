import '../pages/index.css'; // добавьте импорт главного файла стилей

import {initialCards, handleLike, createCard, handleDelete, handleImageClick} from './cards.js';

// @todo: DOM узлы
export const cardsContainer = document.querySelector('.places__list');

// @todo: Вывести карточки на страницу

initialCards.forEach((cardData) => {
    const card = createCard(cardData, handleDelete, handleLike, handleImageClick);
    cardsContainer.append(card);
});