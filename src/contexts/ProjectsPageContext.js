import React, {createContext, useState} from 'react';
import CONTENT_DATA from '../content';

export const ProjectsPageContext = createContext()

const ProjectsPageContextProvider = (props) => {
    const [content,setContent] = useState(CONTENT_DATA.projects);
    return (
        <ProjectsPageContext.Provider value={content}>
            {props.children}
        </ProjectsPageContext.Provider>
    )
}

export default ProjectsPageContextProvider