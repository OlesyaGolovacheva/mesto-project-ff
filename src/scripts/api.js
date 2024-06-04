const password = '7542735c-b616-4dad-bec7-2cb1d297a14f';
const cardsPath = 'https://nomoreparties.co/v1/wff-cohort-14/cards';
const userPath = 'https://nomoreparties.co/v1/wff-cohort-14/users/me';

export const getAllCards = () => {
    return fetch(cardsPath, {
      headers: {
        authorization: password
      }
    })
    .then((result) => {
      if(result.ok){
        return result.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.log(err);
    }); 
};

 export const getProfileData = () => {
    return fetch(userPath, {
        method: 'GET',
        headers: {
        authorization: password
        }
    })
    .then((result) => {
        if(result.ok){
          return result.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    }); 
};

export const setProfileDataApi = (profile) => {
    return fetch(userPath, {
        method: 'PATCH',
        headers: {
            authorization: password,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: profile.name,
            about: profile.about
        })
    })
};

export const setProfileImageApi = (profileData) => {
    return fetch(userPath + '/avatar', {
        method: 'PATCH',
        headers: {
            authorization: password,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: profileData.avatar
        })
    })
};

export const postNewCardApi = (cardData) => {
    return fetch(cardsPath, {
        method: 'POST',
        headers: {
            authorization: password,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: cardData.name,
            link: cardData.link
        })
    })
    .then((response) => {
        if(response.ok){
          return response.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    }); 
};


export const deleteCardApi = (cardId) => {
    return fetch(cardsPath + '/' + cardId, {
        method: 'DELETE',
        headers: {
            authorization: password,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if(response.ok){
          return response.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    }); 
};


export const putLikeApi = (cardId) => {
    return fetch(cardsPath + '/likes/' + cardId, {
        method: 'PUT',
        headers: {
            authorization: password,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if(response.ok){
          return response.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    }); 
};

export const deleteLikeApi = (cardId) => {
    return fetch(cardsPath + '/likes/' + cardId, {
        method: 'DELETE',
        headers: {
            authorization: password,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if(response.ok){
          return response.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    }); 
};