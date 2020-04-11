import React, { Component } from 'react'
import SectionHeading from '../../section-heading/heading.component';
import SkillBox from '../../skillBox/custom-skill-box.component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CONTENT_DATA from '../../../content';

const SkilLSection = styled.div`
    &   {
        padding: 100px 0;

        .button-wrapper {
            margin: 40px auto 0;
            text-align: center;
            padding-bottom: 20px;
        }

        .label {
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 26px;
            margin: 40px 0 30px;
            text-transform: uppercase;
            position: relative;
            padding-bottom: 10px;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
                height: 2px;
                width: 150px;
                background: #FF4900;
            }
        }

        @media( max-width: 768px ) {
            padding: 80px 0;
        }
        
        @media( max-width: 767px ) {
            padding: 60px 0;
        }
    }
`;

class SkillSection extends Component {
    constructor() {
        super();

        this.state = CONTENT_DATA;
    }
    render() {
        const {title,subtitle} = this.state.homePage.about.skills
        return (
            <SkilLSection className='section section-skills padding'>
                <div className='container'>
                    <SectionHeading title={title}>{subtitle}</SectionHeading>
                    <div className='skills-wrapper flex flex-wrap jc-center'>
                        {
                            this.state.about.programingSkills.slice(0,6).map( ({id,name,icon}) => (
                                <SkillBox key={id} skillName={name}>{icon}</SkillBox>
                            ) )
                        }
                    </div>
                    <div className='button-wrapper'>
                        <Link className='btn orange' to='about'>View All</Link>
                    </div>
                </div>
            </SkilLSection>
        )
    }
}

export default SkillSection;