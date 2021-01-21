import React, {useContext} from 'react';
import HeroSection from '../../sections/homepage-sections/section-home-hero/SectionHomeHero';
import AboutHomeSection from '../../sections/homepage-sections/section-home-about/SectionHomeAbout';
import SkillSection from '../../sections/section-skills/SectionSkills';
import ContactSection from '../../sections/section-contact/SectionContact';
import ProjectsHomeSection from '../../sections/homepage-sections/section-home-projects/SectionHomeProjects';
import { HomePageContext } from '../../contexts/HomePageContext';

const HomePage = () => {
    const {hero,about,projects,skills,eventModal} = useContext(HomePageContext).content;

    return (
        <div className='page-wrapper'>
            <HeroSection heroData={hero}/>
            <AboutHomeSection aboutData={about} eventModal={eventModal}/>
            <SkillSection skillData={skills}/>
            <ProjectsHomeSection projectsData={projects}/>
            <ContactSection/>
        </div>
    )
}

export default HomePage;