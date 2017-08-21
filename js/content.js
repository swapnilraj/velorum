import {
  MESSAGE_SELECTOR,
  USERNAME_SELECTOR,
  BODY_SELECTOR,
  CONVERSATION_TITEL_SELECTOR,
  NAV_SELECTOR,
} from './utils/constants';

import {
  getMessage,
  saveMessage,
} from './utils/storageAPI'

import awaitElement from './utils/awaitElement';
import injectListView from './views/injectListView';

const eventListener = (event) => {
  if (event.target.matches(MESSAGE_SELECTOR) || event.target.parentElement.matches(MESSAGE_SELECTOR)) {
    const key = location.pathname;
    const message = event.target.innerHTML;
    saveMessage(key, message);
  }
};

const loadView = () => {
  setTimeout(() => {
    getMessage(location.pathname, (messages) => {
    console.log(messages);
    const props = {title: 'Starred Messages', messages}
    injectListView(props);
  })}, 1);
};

awaitElement(BODY_SELECTOR)
  .then(element => element.addEventListener('click', eventListener));

awaitElement(NAV_SELECTOR)
  .then(element => element.addEventListener('click', loadView));

loadView();