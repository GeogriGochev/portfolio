import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../../buttons/button-hire.component';
import {AboutHomeStyles} from '../../../../assets/styles';
import CONTENT_DATA from '../../../../content';

const AboutHome = AboutHomeStyles;


class AboutHomeSection extends Component {
    constructor() {
        super()

        this.state= CONTENT_DATA;
    }

    eventModal = () => {
        document.querySelectorAll('div.overlay, body, .modal').forEach(function(element) {
            element.classList.add('active');
        });
    }
    render() {
        const {title,text,imgUrl, exp} = this.state.homePage.about;
        return (
            <AboutHome className='section about-home padding'>
                <div className='container'>
                    <div className='row flex ai-cneter flex-wrap'>
                        <div className='box image-wrapper'>
                            <img src={imgUrl} alt='section-img'/>
                            {exp}
                        </div>
                        <div className='box text-content'>
                            <h2 className='title animated'>{title}</h2>
                            <div className='content'>
                                <p>{text}</p>
                            </div>
                            <div className='buttons-wrapper flex'>
                                <Button orange onClick={this.eventModal}>Hire Me!</Button>
                                <Link to='/about' className='btn trans'>More about me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </AboutHome>
        )
    }
}

export default AboutHomeSection;
