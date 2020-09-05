import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {HeroSectionStyles} from '../../../../assets/styles';
import CONTENT_DATA from '../../../../content';

const HerOSection = HeroSectionStyles;

class HeroSection extends Component {
    constructor() {
        super();
        
        this.state= CONTENT_DATA;
    }

    render() {
        const {name,position,imageUrl} = this.state.homePage.hero;
        return (
            <HerOSection className='section hero-section'>
                <div className='container'>
                    <div className='row flex js-sb ai-center'>
                        <div className='box text-content'>
                            <div className='content-wrapper'>
                                <h1 className='title' data-tooltip='Hello, I am'>
                                    {name}
                                </h1>
                                <p className='subtitle animated'>{position}</p>
                                <div className='buttons-wrapper flex ai-center'>
                                    <a className='btn orange' href='https://drive.google.com/file/d/1iEDWWhnXuzHAu6Xjv5pPsoVwyL4VHpN9/view?usp=sharing' target='_blank'  rel="noopener noreferrer">Download CV</a>
                                    <Link to='/projects' className='btn trans'>My Work</Link>
                                </div>
                            </div>
                        </div>
                        <div className='box image-wrapper'>
                            <img src={imageUrl} alt='hero '/>
                        </div>
                    </div>
                </div>
            </HerOSection>
        )
    }
}

export default HeroSection;
