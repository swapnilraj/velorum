import {
  MESSAGE_SELECTOR,
  MESSAGE_AREA_SELECTOR,
} from './constants';


const attachListener = () => {
  const messageArea = document.querySelector(MESSAGE_AREA_SELECTOR);
   messageArea.addEventListener('click', eventListener);
};

const eventListener = (event) => {
  if (event.target.matches(MESSAGE_SELECTOR)) {
    console.log(event);
  }
};


setTimeout(() => {
  attachListener();
}, 4000);
