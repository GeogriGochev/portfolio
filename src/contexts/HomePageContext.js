import React, {createContext, useState} from 'react';
import CONTENT_DATA from '../content';
export const HomePageContext = createContext();

const HomePageContextProvider = (props) => {
    const programingSkillsListing = CONTENT_DATA.about.programingSkills;
    const projectsListing = CONTENT_DATA.projects.listing;
    const homepageData = {...CONTENT_DATA.homePage, projects: {...CONTENT_DATA.homePage.projects,projectsListing}, skills:{title:CONTENT_DATA.about.title,subtitle:CONTENT_DATA.about.programSkillTitle,programingSkillsListing}}
    const [content,setContent] = useState(homepageData);
    console.log(content);

    const eventModal = () => {
        document.querySelectorAll('div.overlay, body, .modal').forEach(function(element) {
            element.classList.add('active');
        });
    }
    return (
        <HomePageContext.Provider value={{content,eventModal}}>
            {props.children}
        </HomePageContext.Provider>
    )
}

export default HomePageContextProvider;
