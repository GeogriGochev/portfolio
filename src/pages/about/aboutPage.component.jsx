import React from 'react'
import PageHeading from '../../components/1.sections/section-page-heading/section-heading.component';
import PersonalSkills from '../../components/1.sections/section-personal-skills/personal-skills.component';
import ProgramingSkills from '../../components/1.sections/section-programing-skills/programing-skills.component';
import ContactSection from '../../components/1.sections/section-contact/section-contact.component';
const AboutPage = () => (
    <div className='page-wrapper'>
        <PageHeading paging='about-heading-page' mainTitle='About me' subtittle='Be yourself. Everyone else is already taken.'><img src={require('../../assets/images/about.jpg')} alt='heading img'/></PageHeading>
        <PersonalSkills/>
        <ProgramingSkills/>
        <ContactSection/>
    </div>
)

export default AboutPage;