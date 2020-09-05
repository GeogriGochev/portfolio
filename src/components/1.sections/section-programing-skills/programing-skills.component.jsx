import React, { Component } from 'react'
import SectionHeading from '../../section-heading/heading.component';
import SkillBox from '../../skillBox/custom-skill-box.component';
import {SkilLSectionStyles} from '../../../assets/styles';
import CONTENT_DATA from '../../../content';

const SkilLSection = SkilLSectionStyles;

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