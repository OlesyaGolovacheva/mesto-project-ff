const token = '7542735c-b616-4dad-bec7-2cb1d297a14f';
const cardsPath = 'https://nomoreparties.co/v1/wff-cohort-14/cards';
const userPath = 'https://nomoreparties.co/v1/wff-cohort-14/users/me';
const handleResponse = (result) => {
    if(result.ok){
      return result.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

export const getAllCards = () => {
    return fetch(cardsPath, {
      headers: {
        authorization: token
      }
    })
    .then(handleResponse) 
};

 export const getProfileData = () => {
    return fetch(userPath, {
        method: 'GET',
        headers: {
        authorization: token
        }
    })
    .then(handleResponse) 
};

export const setProfileDataApi = (profile) => {
    return fetch(userPath, {
        method: 'PATCH',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: profile.name,
            about: profile.about
        })
    })
    .then(handleResponse)
};

export const setProfileImageApi = (profileData) => {
    return fetch(userPath + '/avatar', {
        method: 'PATCH',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: profileData.avatar
        })
    })
    .then(handleResponse)
};

export const postNewCardApi = (cardData) => {
    return fetch(cardsPath, {
        method: 'POST',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: cardData.name,
            link: cardData.link
        })
    })
    .then(handleResponse)
};


export const deleteCardApi = (cardId) => {
    return fetch(cardsPath + '/' + cardId, {
        method: 'DELETE',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        }
    })
    .then(handleResponse) 
};


export const putLikeApi = (cardId) => {
    return fetch(cardsPath + '/likes/' + cardId, {
        method: 'PUT',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        }
    })
    .then(handleResponse) 
};

export const deleteLikeApi = (cardId) => {
    return fetch(cardsPath + '/likes/' + cardId, {
        method: 'DELETE',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        }
    })
    .then(handleResponse)
};