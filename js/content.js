import {
  MESSAGE_SELECTOR,
  USERNAME_SELECTOR,
  BODY_SELECTOR,
  CONVERSATION_TITEL_SELECTOR,
  NAV_SELECTOR,
  STARRED_SELECTOR,
} from './utils/constants';

import {
  getMessage,
  saveMessage,
  setOnChanged,
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
    const props = {title: 'Starred Messages', messages}
    injectListView(props);
  })}, 0)
};

const reloadView = () => {
  awaitElement(STARRED_SELECTOR)
    .then(element =>  element.parentNode.removeChild(element))
    .then(loadView);
};

setOnChanged(reloadView);

awaitElement(BODY_SELECTOR)
  .then(element => element.addEventListener('click', eventListener));

awaitElement(NAV_SELECTOR)
  .then(element => element.addEventListener('click', reloadView));

loadView();