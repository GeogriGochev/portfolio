import React, {useContext} from 'react';
import PageHeading from '../../sections/section-page-heading/SectionPageHeading';
import SectionContact from '../../sections/section-contact/SectionContact';
import ProjectsMasondry from '../../sections/section-projects/SectionProjects';
import HeroImage from '../../assets/images/projects.jpg';
import { ProjectsPageContext } from '../../contexts/ProjectsPageContext';
const ProjectsPage = () => {
    const {title,listing} = useContext(ProjectsPageContext);
    return (
        <div className='page-wrapper'>
            <PageHeading projects mainTitle='Projects' subtittle='Don’t stop when you’re tired. Stop when you’re done.'>
                <img src={HeroImage} alt='heading img'/>
            </PageHeading>
            <ProjectsMasondry title={title} listing={listing}/>
            <SectionContact/>
        </div>
    )
}

export default ProjectsPage;