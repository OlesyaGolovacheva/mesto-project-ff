(()=>{"use strict";var e="7542735c-b616-4dad-bec7-2cb1d297a14f",t="https://nomoreparties.co/v1/wff-cohort-14/cards",n="https://nomoreparties.co/v1/wff-cohort-14/users/me",o=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(res.status))},r=function(n){return fetch(t+"/likes/"+n,{method:"PUT",headers:{authorization:e,"Content-Type":"application/json"}}).then(o)},u=function(n){return fetch(t+"/likes/"+n,{method:"DELETE",headers:{authorization:e,"Content-Type":"application/json"}}).then(o)},c=document.querySelector("#card-template").content;function i(e,t,n,o){var r=c.querySelector(".card").cloneNode(!0),u=r.querySelector(".card__delete-button"),i=r.querySelector(".card__like-button"),a=r.querySelector(".card__image");return r.querySelector(".card__title").textContent=e.name,r.querySelector(".card__image").alt=e.name,r.querySelector(".card__image").src=e.link,e.likes&&e.likes.length>0&&(r.querySelector(".card__like-counter").textContent=e.likes.length),e.likes.forEach((function(t){e.likes.some((function(t){return e.userId==t._id}))&&i.classList.add("card__like-button_is-active")})),e.owner._id!=e.userId?u.remove():u.addEventListener("click",t),i.addEventListener("click",n),a.addEventListener("click",o),r}function a(n,r){(function(n){return fetch(t+"/"+n,{method:"DELETE",headers:{authorization:e,"Content-Type":"application/json"}}).then(o)})(r).then((function(e){n.target.closest(".card").remove()})).catch((function(e){console.log(e)}))}function l(e,t){var n=e.target.closest(".card__like-container").querySelector(".card__like-counter");(e.target.classList.contains("card__like-button_is-active")?u:r)(t).then((function(t){n.textContent=t.likes.length||"",e.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))}function s(e){var t=e.querySelector(".popup__close");e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",d),t.addEventListener("click",_),e.addEventListener("mousedown",f)}function p(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d),e.removeEventListener("click",_),e.removeEventListener("mousedown",f)}function d(e){"Escape"===e.key&&_()}function _(e){p(document.querySelector(".popup_is-opened"))}function f(e){e.currentTarget===e.target&&_()}function m(e){e.querySelector(".popup__button").textContent="Сохранение..."}function y(e){e.querySelector(".popup__button").textContent="Сохранить"}var v=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent="",e.querySelector(n.submitButtonSelector)};function h(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));e.querySelector(t.submitButtonSelector),n.forEach((function(n){v(e,n,t)}))}function S(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var q,g=document.querySelector(".places__list"),k=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__add-button"),E=document.querySelector(".popup_type_edit"),L=document.querySelector(".popup__input_type_name"),A=document.querySelector(".popup__input_type_description"),x=document.querySelector(".popup_type_new-card"),T=document.querySelector(".popup__input_type_card-name"),w=document.querySelector(".popup__input_type_url"),j=document.querySelector(".profile__title"),I=document.querySelector(".profile__description"),z=document.querySelector(".profile__image"),O=document.querySelector(".popup_type_edit-profile-image"),B=document.querySelector("#image-link-input"),D={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function P(e){var t=document.querySelector(".popup_type_image"),n=document.querySelector(".popup__caption"),o=document.querySelector(".popup__image");n.textContent=e.target.alt,o.src=e.target.src,o.alt=e.target.alt,s(t)}Promise.all([fetch(n,{method:"GET",headers:{authorization:e}}).then(o),fetch(t,{headers:{authorization:e}}).then(o)]).then((function(e){var t,n,o,r=(o=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,u,c,i=[],a=!0,l=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=u.call(n)).done)&&(i.push(o.value),i.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw r}}return i}}(n,o)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=r[0],c=r[1];t=u,j.textContent=t.name,I.textContent=t.about,document.querySelector(".profile__image").style.backgroundImage="url(".concat(t.avatar,")"),function(e,t){e.forEach((function(e){e.userId=t;var n=i(e,(function(t){return a(t,e._id)}),(function(t){return l(t,e._id)}),P);g.append(n)}))}(c,u._id)})).catch((function(e){console.log(e)})),k.addEventListener("click",(function(e){var t=document.querySelector(".popup_type_edit");L.value=j.textContent,A.value=I.textContent,h(t,D),s(t)})),C.addEventListener("click",(function(e){var t=document.querySelector(".popup_type_new-card");h(t,D),s(t)})),z.addEventListener("click",(function(e){var t=document.querySelector(".popup_type_edit-profile-image");h(t,D),s(t)})),E.addEventListener("submit",(function(t){var r;t.preventDefault(),E.querySelector(".popup__button").classList.contains("popup__button_disabled")||(m(E),(r={name:L.value,about:A.value},fetch(n,{method:"PATCH",headers:{authorization:e,"Content-Type":"application/json"},body:JSON.stringify({name:r.name,about:r.about})}).then(o)).then((function(e){j.textContent=e.name,I.textContent=e.about})).catch((function(e){console.log(e)})).finally((function(){y(E),p(E)})))})),O.addEventListener("submit",(function(t){var r;t.preventDefault(),O.querySelector(".popup__button").classList.contains("popup__button_disabled")||(m(O),(r={avatar:B.value},fetch(n+"/avatar",{method:"PATCH",headers:{authorization:e,"Content-Type":"application/json"},body:JSON.stringify({avatar:r.avatar})}).then(o)).then((function(e){document.querySelector(".profile__image").style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){console.log(e)})).finally((function(){y(O),p(O)})))})),x.addEventListener("submit",(function(n){n.preventDefault();var r={name:T.value,link:w.value};Array.from(x.querySelectorAll(".popup__input")),x.querySelector(".popup__button").classList.contains("popup__button_disabled")||(m(x),function(n){return fetch(t,{method:"POST",headers:{authorization:e,"Content-Type":"application/json"},body:JSON.stringify({name:n.name,link:n.link})}).then(o)}(r).then((function(e){e.userId=e.owner._id;var t=i(e,(function(t){return a(t,e._id)}),(function(t){return l(t,e._id)}),P);g.prepend(t)})).catch((function(e){console.log(e)})).finally((function(){y(x),p(x)}))),n.target.reset()})),q=D,Array.from(document.querySelectorAll(q.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(".popup__button");S(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?v(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass),e.querySelector(o.submitButtonSelector)}(e,t,t.validationMessage,n)}(e,r,t),S(n,o,t)}))}))}(e,q)}))})();