import React, { Component } from 'react';
import ProjectBox from '../../projectBox/project-box.component';
import styled from 'styled-components';
import CONTENT_DATA from '../../../content';

const ProjectListing = styled.div`
    .title {
        margin-bottom: 60px;
    }
    @media( max-width: 1024px ) {
        padding: 0 0 80px;
    }

    @media( max-width: 767px ) {
        .title {
            font-size: 1.875rem;
            margin-bottom: 40px;
}
        }
    }
`;

class ProjectsMasondry extends Component {
    constructor() {
        super();

        this.state = CONTENT_DATA;
    }
    render() {
        const {title} = this.state.projects
        return (
            <ProjectListing className='section projects-listing padding'>
                <div className='container'>
                    <h2 className='title animated'>{title}</h2>
                    <div className='projects-wrapper cols flex flex-wrap jc-sb'>
                        {
                            this.state.projects.listing.map( ({id,linkUrl,imgUrl,tag,name,soon,size}) => (
                                <ProjectBox key={id} linkUrl={linkUrl} imgUrl={imgUrl} tag={tag} name={name} soon={soon} size={size}/>
                            ) )
                        }
                    </div>
                </div>                
            </ProjectListing>
        )
    }
}

export default ProjectsMasondry;