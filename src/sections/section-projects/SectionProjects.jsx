
import React from 'react';
import ProjectBox from '../../components/projectBox/ProjectBox';
import {ProjectListingStyles} from './SectionProjects.styles';

const ProjectListing = ProjectListingStyles;

export const SectionProjects = (props) => {
    const { title, listing } = props;
    const projectsListing = listing.map( ({id,linkUrl,imgUrl,tag,name,soon,size}) => (
        <ProjectBox key={id} linkUrl={linkUrl} imgUrl={imgUrl} tag={tag} name={name} soon={soon} size={size}/>
    ));

    return (
        <ProjectListing className='section projects-listing padding'>
            <div className='container'>
                <h2 className='title animated'>{title}</h2>
                <div className='projects-wrapper cols flex flex-wrap jc-sb'>
                    {
                        projectsListing
                    }
                </div>
            </div>                
        </ProjectListing>
    )
}

export default SectionProjects;
