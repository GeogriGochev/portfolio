import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/buttons/ButtonHire';
import {AboutHomeStyles} from './SectionHomeAbout.styles';
import ImageUrl from '../../../assets/images/skill.png';

const AboutHome = AboutHomeStyles;

const SectionHomeAbout = ({aboutData},eventModal) => {
    const {title,text, exp} = aboutData;
    return (
        <AboutHome className='section about-home padding'>
            <div className='container'>
                <div className='row flex ai-cneter flex-wrap'>
                    <div className='box image-wrapper'>
                        <img src={ImageUrl} alt='section-img'/>
                        {exp}
                    </div>
                    <div className='box text-content'>
                        <h2 className='title animated'>{title}</h2>
                        <div className='content'>
                            <p>{text}</p>
                        </div>
                        <div className='buttons-wrapper flex'>
                            <Button orange onClick={eventModal}>Hire Me!</Button>
                            <Link to='/about' className='btn trans'>More about me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </AboutHome>
    )
}


export default SectionHomeAbout;
