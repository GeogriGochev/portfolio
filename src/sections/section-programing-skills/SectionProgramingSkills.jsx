import React from 'react';
import SectionHeading from '../../components/section-heading/Heading';
import SkillBox from '../../components/skillBox/SkillBox';
import {SkilLSectionStyles} from './SectionProgramingSkills.styles';

const SkilLSection = SkilLSectionStyles;

export const SectionProgramingSkills = (props) => {
    const {programSkillTitle, programingSkills} = props;
    const skillsListing = programingSkills.slice(0,9).map( ({id,name,icon}) => (
        <SkillBox key={id} skillName={name}>{icon}</SkillBox>
    ));
    const uxSkillsListing =  programingSkills.slice(9,12).map( ({id,name,icon}) => (
        <SkillBox key={id} skillName={name}>{icon}</SkillBox>
    ));
    
    return (
        <SkilLSection className='section section-skills about-page padding'>
            <div className='container'>
                <SectionHeading title='Skills'>{programSkillTitle}</SectionHeading>
                <div className='skills-wrapper flex flex-wrap'>
                    {
                        skillsListing
                    }
                </div>
                <h3 className='label  animated'>UX / UI</h3>
                <div className='skills-wrapper flex flex-wrap'>
                    {
                        uxSkillsListing
                    }
                </div>
            </div>
        </SkilLSection>
    )
}


export default SectionProgramingSkills;