import listBody from './components/listBody';
import {
    OPTIONS_SELECTOR,
} from '../constants';

import awaitElement from '../awaitElement';

const injectListView = ({
    title,
    messages,
}) => {

    const listBodyView = listBody({ title, messages });

    /**
     * @type {HTMLElement}
     */
    awaitElement(OPTIONS_SELECTOR)
        .then(element => {
            element.insertAdjacentElement('afterend', listBodyView);
        });
};

export default injectListView;