import {
    OPTIONS_SELECTOR,
    STAR_ID,
} from '../utils/constants';

import awaitElement from '../utils/awaitElement';

export const injectListView = (listView) => {
    awaitElement(OPTIONS_SELECTOR)
        .then(element => element.insertAdjacentElement('afterend', listView));
};

export const replaceListView = (newListView) => {
    awaitElement(STAR_ID)
        .then(element => element.parentNode.replaceChild(newListView, element));
};