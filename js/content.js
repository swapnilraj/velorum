import {
  MESSAGE_SELECTOR,
  MESSAGE_AREA_SELECTOR,
  USERNAME_SELECTOR,
} from './constants';

import awaitElement from './awaitElement';

const eventListener = (event) => {
  if (event.target.matches(MESSAGE_SELECTOR)) {
    const key = document.querySelector(USERNAME_SELECTOR).innerText;
    const message = event.target.innerHTML;
    saveMessage(key, message);
    getMessage(key, messages => console.log(messages));
  }
};

const saveMessage = (key, message) => {
  const storeMessage = (savedMessages) => {
    savedMessages.push(message);
    chrome.storage.local.set({ [key]: savedMessages });
  }
  getMessage(key, storeMessage);
};

const getMessage = (key, callback) => {
  chrome.storage.local.get(key,
    savedMessages => callback(savedMessages[key] || []));
};

awaitElement(MESSAGE_AREA_SELECTOR)
  .then(element => element.addEventListener('click', eventListener));