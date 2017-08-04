import VElement from '../util/VElement';


import {
    LIST_ELEMENT_CONTAINER_CLASS,
    LIST_ELEMENT_CLASS,
} from '../../constants';

const listElement = ({ message }) => {

    const listElementView = new VElement('div', LIST_ELEMENT_CLASS);
    listElementView.element.innerHTML = message;

    const miniContainer = new VElement('div', LIST_ELEMENT_CONTAINER_CLASS, {margin: "10px"}, {}, [ listElementView.element ]);

    return miniContainer.element;
};

export default listElement;