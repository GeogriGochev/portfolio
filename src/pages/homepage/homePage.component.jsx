import React from 'react'

import HeroSection from '../../components/1.sections/homepage-sections/section-home-hero/section-hero.component';
import AboutHomeSection from '../../components/1.sections/homepage-sections/section-home-about/section-home-about.component';
import SkillSection from '../../components/1.sections/section-skills/section-skills.component';
import ProjectsHomeSection from '../../components/1.sections/homepage-sections/section-home-projects/section-home-projects.component';
import ContactSection from '../../components/1.sections/section-contact/section-contact.component';

const HomePage = () => (
    <div className='page-wrapper'>
        <HeroSection/>
        <AboutHomeSection/>
        <SkillSection/>
        <ProjectsHomeSection/>
        <ContactSection/>
    </div>
)

export default HomePage;