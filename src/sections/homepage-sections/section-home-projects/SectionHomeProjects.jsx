import React from 'react';
import { Link } from 'react-router-dom';
import {ProjectsSectionStyles} from './SectionHomeProjects.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../../../components/section-heading/Heading';
import SliderBox from '../../../components/sliderBox/SliderBox';
import 'swiper/swiper.scss';


const ProjectsSection = ProjectsSectionStyles;

const SectionHomeProjects = ({projectsData}) => {
    const {title,subtitle,projectsListing} = projectsData;

    const slideslisting = projectsListing.slice(0, 4).map( ({linkUrl,imgUrl,tag,name,year, id}) => (
        <SwiperSlide key={id}>
            <div className='slide' >
                    <SliderBox  linkUrl={linkUrl} imgUrl={imgUrl} tag={tag} name={name} year={year}/>
            </div>
        </SwiperSlide>
    ))

    const swiperSettings = {
        // when window width is >= 0px
        0: {
            slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        },
    }
    
    return (
        <ProjectsSection className='home-projects padding'>
            <div className='container'>
                <SectionHeading title={title}>
                    {subtitle}
                </SectionHeading>
                <div className='recent-projects'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    breakpoints={swiperSettings}
                >
                    {
                        slideslisting
                    }
                </Swiper>
                </div>
                <div className='btn-wrapper'>
                    <Link to='/projects' className='btn orange'>View All</Link>
                </div>
            </div>
        </ProjectsSection>
    )
}


export default SectionHomeProjects;