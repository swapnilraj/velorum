import VElement from '../util/VElement';
import listContainer from './listContainer';

import {
    LIST_BODY_CLASS,
    LIST_LINE_BREAK_CLASS,
    LIST_TITLE_CLASS,
} from '../../utils/constants';

const listBody = ({ title, messages}) => {

    const listContainerView = listContainer({ messages });


    const lineBreak = new VElement('div', LIST_LINE_BREAK_CLASS);

    const listTitle = new VElement('h4', LIST_TITLE_CLASS);
    listTitle.element.innerHTML = title;

    const listBodyView = new VElement('div', LIST_BODY_CLASS);

    listBodyView.child([lineBreak.element]);
    listBodyView.child([listTitle.element]);
    listBodyView.child([listContainerView]);

    return listBodyView.element;
};

export default listBody;