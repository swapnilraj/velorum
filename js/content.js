import {
  MESSAGE_SELECTOR,
  MESSAGE_AREA_SELECTOR,
  USERNAME_SELECTOR,
} from './constants';


const attachListener = () => {
  const messageArea = document.querySelector(MESSAGE_AREA_SELECTOR);
   messageArea.addEventListener('click', eventListener);
};

const eventListener = (event) => {
  if (event.target.matches(MESSAGE_SELECTOR)) {
    saveMessage(document.querySelector(USERNAME_SELECTOR), event.target.innerHTML);
  }
};

const saveMessage = (key, message) => {
  chrome.storage.local.set({[key]: message})
};

setTimeout(() => {
  attachListener();
}, 4000);
