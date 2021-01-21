import React, {createContext, useState} from 'react';
import CONTENT_DATA from '../content';

export const ContactContext = createContext();

const ContactSectionContext = (props) => {
    const [content,setContent] = useState(CONTENT_DATA.offerSection);

    const eventModal = () => {
        document.querySelectorAll('div.overlay, body, .modal').forEach(function(element) {
            element.classList.add('active');
        });
    }
    return (
        <ContactContext.Provider value={{content,eventModal}}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactSectionContext;
