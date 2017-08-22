import {
  MESSAGE_SELECTOR,
  USERNAME_SELECTOR,
  BODY_SELECTOR,
  CONVERSATION_TITEL_SELECTOR,
  NAV_SELECTOR,
  STAR_ID,
} from './utils/constants';

import {
  getMessage,
  saveMessage,
  setOnChanged,
} from './utils/storageAPI'

import listBody from './views/components/listBody'
import awaitElement from './utils/awaitElement';
import {
  injectListView,
  replaceListView,
} from './views/ListView';

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
    injectListView(listBody(props));
  })}, 0)
};

const reloadView = () => {
  setTimeout(() => {
    getMessage(location.pathname, (messages) => {
    const props = {title: 'Starred Messages', messages}
    replaceListView(listBody(props));
  })}, 0)
};

awaitElement(BODY_SELECTOR)
  .then(element => element.addEventListener('click', eventListener));

awaitElement(NAV_SELECTOR)
  .then(element => element.addEventListener('click', reloadView));
setOnChanged(reloadView);
loadView();