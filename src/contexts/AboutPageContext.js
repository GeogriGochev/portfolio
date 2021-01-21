import React, {createContext, useState} from 'react';
import CONTENT_DATA from '../content';


export const AboutContext = createContext();

const AboutPageContextProvider = props => {
    const [content, setContent] = useState(CONTENT_DATA.about);
    return (
        <AboutContext.Provider value={{content}}>
            {props.children}
        </AboutContext.Provider>
    )
}

export default AboutPageContextProvider;
