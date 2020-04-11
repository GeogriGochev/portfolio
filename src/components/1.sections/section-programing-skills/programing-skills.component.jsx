import React, { Component } from 'react'
import SectionHeading from '../../section-heading/heading.component';
import SkillBox from '../../skillBox/custom-skill-box.component'; 
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
            padding: 60px 0;
        }
    }
`;

class ProgramingSkills extends Component {
    constructor() {
        super();

        this.state = CONTENT_DATA;
    }
    render() {
        return (
            <SkilLSection className='section section-skills about-page padding'>
                <div className='container'>
                    <SectionHeading title='Skills'>Skills rest in your mind, not in the props you make use of.</SectionHeading>
                    <div className='skills-wrapper flex flex-wrap'>
                        {
                            this.state.about.programingSkills.slice(0,9).map( ({id,name,icon}) => (
                                <SkillBox key={id} skillName={name}>{icon}</SkillBox>
                            ) )
                        }
                    </div>
                    <h3 className='label  animated'>Basics</h3>
                    <div className='skills-wrapper flex flex-wrap'>
                        {
                            this.state.about.programingSkills.slice(9,12).map( ({id,name,icon}) => (
                                <SkillBox key={id} skillName={name}>{icon}</SkillBox>
                            ) )
                        }
                    </div>
                </div>
            </SkilLSection>
        )
    }
}

export default ProgramingSkills;