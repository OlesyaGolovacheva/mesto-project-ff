//Валидация форм
export {enableValidation, clearValidation}

const showInputError = (formElement, inputElement, errorMessage, validationProperty) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationProperty.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationProperty.errorClass);
    formElement.querySelector(validationProperty.submitButtonSelector).classList.add(validationProperty.inactiveButtonClass);
  };
  
  const hideInputError = (formElement, inputElement, validationProperty) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationProperty.inputErrorClass);
    errorElement.classList.remove(validationProperty.errorClass);
    errorElement.textContent = '';
    formElement.querySelector(validationProperty.submitButtonSelector).classList.remove(validationProperty.inactiveButtonClass);
  };
  
  const checkInputValidity = (formElement, inputElement, validationProperty) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
  
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationProperty);
    } else {
      hideInputError(formElement, inputElement, validationProperty);
    }
  };
  
  const setEventListeners = (formElement, validationProperty) => {
    const inputList = Array.from(formElement.querySelectorAll(validationProperty.inputSelector));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, validationProperty);
      });
    });
  };

  function enableValidation(validationProperty){
    const formList = Array.from(document.querySelectorAll(validationProperty.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
        setEventListeners(formElement, validationProperty);
    }); 
  }

  function clearValidation(formElement, validationProperty){
    const inputListForm = Array.from(formElement.querySelectorAll(validationProperty.inputSelector));
    const buttonElement = formElement.querySelector(validationProperty.submitButtonSelector);
    inputListForm.forEach((elem) => {
      hideInputError(formElement, elem, validationProperty);
    });
    buttonElement.classList.add(validationProperty.inactiveButtonClass);
  };