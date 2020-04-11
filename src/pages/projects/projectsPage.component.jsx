import React from 'react'
import PageHeading from '../../components/1.sections/section-page-heading/section-heading.component';
import ContactSection from '../../components/1.sections/section-contact/section-contact.component';
import ProjectsMasondry from '../../components/1.sections/section-projects/section-projects.component';

const ProjectsPage = () => (
    <div className='page-wrapper'>
        <PageHeading projects mainTitle='Projects' subtittle='Don’t stop when you’re tired. Stop when you’re done.'><img src={require('../../assets/images/projects.jpg')} alt='heading img'/></PageHeading>
        <ProjectsMasondry/>
        <ContactSection/>
    </div>
)

export default ProjectsPage;