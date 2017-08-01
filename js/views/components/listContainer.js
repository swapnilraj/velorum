import VElement from '../util/VElement';
import listElement from './listElement';

import {
    LIST_CONTAINER_CLASS,
} from '../../constants';

const listContainer = ({ messages }) => {
    const listContainerView = new VElement('div', LIST_CONTAINER_CLASS);


    const messageListView = messages.map( message => {
        return listElement({message});
    });

    debugger;

    listContainerView.child(messageListView);
    return listContainerView.element;
};

export default listContainer;