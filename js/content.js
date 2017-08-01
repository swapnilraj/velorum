import {
  MESSAGE_SELECTOR,
  USERNAME_SELECTOR,
  BODY_SELECTOR,
  CONVERSATION_TITEL_SELECTOR,
} from './constants';

import awaitElement from './awaitElement';
import injectListView from './views/injectListView';

const eventListener = (event) => {
  if (event.target.matches(MESSAGE_SELECTOR) || event.target.parentElement.matches(MESSAGE_SELECTOR)) {
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

const loadView = () => {
  getMessage(location.pathname, (messages) => {
        const props = {title: 'Saved Messages', messages}
        injectListView(props);
      });
};

awaitElement(BODY_SELECTOR)
  .then(element => element.addEventListener('click', eventListener));

loadView();