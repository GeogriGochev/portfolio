import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SliderBox from '../../../sliderBox/custom-slider-box.component';
import Slider from 'react-slick';
import SectionHeading from '../../../section-heading/heading.component';
import styled from 'styled-components';
import CONTENT_DATA from '../../../../content';

const ProjectsSection = styled.div`
    &   {
        padding-top: 0;

        .btn-wrapper {
            margin: 100px auto 0;
            text-align: center;
            padding-bottom: 20px;
        }

        .slide {
            outline: none !important;
        }
    }
`;


class ProjectsHomeSection extends Component {
    constructor() {
        super();

        this.state = CONTENT_DATA;
    }

    render() {
        const {title,subtitle} = this.state.homePage.projects
        const settings = {
            className: "center",
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            centerPadding: "100px",
            slidesToShow: 2,
            speed: 500,
            dots: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                      centerMode: false,
                    }
                },
            ]
        }
        return (
            <ProjectsSection className='home-projects padding'>
                <div className='container'>
                    <SectionHeading title={title}>
                        {subtitle}
                    </SectionHeading>
                    <div className='recent-projects'>
                        <Slider {...settings}>
                            {
                                this.state.projects.listing.slice(0, 4).map( ({linkUrl,imgUrl,tag,name,year, id}) => (
                                <div className='slide' key={id}>
                                        <SliderBox  linkUrl={linkUrl} imgUrl={imgUrl} tag={tag} name={name} year={year}/>
                                </div>
                                ))
                            }
                        </Slider>
                    </div>
                    <div className='btn-wrapper'>
                        <Link to='/projects' className='btn orange'>View All</Link>
                    </div>
                </div>
            </ProjectsSection>
        )
    }
}

export default ProjectsHomeSection;