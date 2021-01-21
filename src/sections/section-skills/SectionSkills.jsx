import React from 'react';
import SectionHeading from '../../components/section-heading/Heading';
import SkillBox from '../../components/skillBox/SkillBox';
import { Link } from 'react-router-dom';
import {SkilLSectionStyle} from './SectionSkills.styles';

const SkilLSection = SkilLSectionStyle;

const SectionSkills = ({skillData}) => {
    const {title,subtitle,programingSkillsListing} = skillData;

    const listingSkils = programingSkillsListing.slice(0,6).map( ({id,name,icon}) => (
        <SkillBox key={id} skillName={name}>{icon}</SkillBox>
    ));
    
    return (
        <SkilLSection className='section section-skills padding'>
            <div className='container'>
                <SectionHeading title={title}>{subtitle}</SectionHeading>
                <div className='skills-wrapper flex flex-wrap jc-center'>
                    {
                        listingSkils
                    }
                </div>
                <div className='button-wrapper'>
                    <Link className='btn orange' to='about'>View All</Link>
                </div>
            </div>
        </SkilLSection>
    )
}


export default SectionSkills;