import React, { Component } from 'react'
import SectionHeading from '../../section-heading/heading.component';
import SkillBox from '../../skillBox/custom-skill-box.component';
import { Link } from 'react-router-dom';
import {SkilLSectionStyle} from '../../../assets/styles';
import CONTENT_DATA from '../../../content';

const SkilLSection = SkilLSectionStyle;

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