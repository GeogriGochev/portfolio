import React, {useContext} from 'react';
import PageHeading from '../../sections/section-page-heading/SectionPageHeading';
import PersonalSkills from '../../sections/section-personal-skills/SectionPersonalSkills';
import ProgramingSkills from '../../sections/section-programing-skills/SectionProgramingSkills';
import ContactSection from '../../sections/section-contact/SectionContact';
import HeroImage from '../../assets/images/about.jpg';
import {AboutContext} from '../../contexts/AboutPageContext';
const AboutPage = () => {
    const {title,subtitle,softSkill,hardSkill,programSkillTitle,softSkills,hardSkills,programingSkills} = useContext(AboutContext).content;
    return (
        <div className='page-wrapper'>
            <PageHeading paging='about-heading-page' mainTitle='About me' background={HeroImage} subtittle='Be yourself. Everyone else is already taken.'>
                <img src={HeroImage} alt='heading img'/>
            </PageHeading>
            <PersonalSkills title={title} subtitle={subtitle} softSkill={softSkill} hardSkill={hardSkill} softSkills={softSkills} hardSkills={hardSkills}/>
            <ProgramingSkills programSkillTitle={programSkillTitle} programingSkills={programingSkills}/>
            <ContactSection/>
        </div>
    )
}

export default AboutPage;