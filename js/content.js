import {
  MESSAGE_SELECTOR,
  USERNAME_SELECTOR,
  BODY_SELECTOR,
} from './constants';

import awaitElement from './awaitElement';

const eventListener = (event) => {
  if (event.target.matches(MESSAGE_SELECTOR)) {
    const key = location.pathname;
    const message = event.target.innerHTML;
    saveMessage(key, message);
    getMessage(key, messages => console.log(messages));
  }
};

const saveMessage = (key, message) => {
  const storeMessage = (savedMessages) => {
    savedMessages.push(message);
    chrome.storage.local.set({ [key]: savedMessages });
  };
  getMessage(key, storeMessage);
};

const getMessage = (key, callback) => {
  chrome.storage.local.get(key,
    savedMessages => callback(savedMessages[key] || []));
};

awaitElement(BODY_SELECTOR)
  .then(element => element.addEventListener('click', eventListener));