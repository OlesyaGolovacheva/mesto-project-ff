//Валидация форм
export {enableValidation, clearValidation}

const showInputError = (formElement, inputElement, errorMessage, validationProperty) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationProperty.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationProperty.errorClass);
    const buttonElement = formElement.querySelector(validationProperty.submitButtonSelector);
  };
  
  const hideInputError = (formElement, inputElement, validationProperty) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationProperty.inputErrorClass);
    errorElement.classList.remove(validationProperty.errorClass);
    errorElement.textContent = '';
    const buttonElement = formElement.querySelector(validationProperty.submitButtonSelector);
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
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement, validationProperty);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, validationProperty);
        toggleButtonState(inputList, buttonElement, validationProperty);
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
  };

  function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  function toggleButtonState(inputList, buttonElement, validationProperty){
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(validationProperty.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(validationProperty.inactiveButtonClass);
    }
  }