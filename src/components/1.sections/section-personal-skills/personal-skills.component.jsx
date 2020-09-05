import React, { Component } from 'react';
import { ReactComponent as Li } from '../../../assets/images/icons/circle.svg';
import {PersonaLSkillsStyles} from '../../../assets/styles';
import CONTENT_DATA from '../../../content';

const PersonaLSkills = PersonaLSkillsStyles;

class PersonalSkills extends Component {
    constructor(props) {
        super(props)

        this.state= CONTENT_DATA;
    }

    render() {
        let {title,subtitle,softSkill,hardSkill} = this.state.about;
        return (
            <PersonaLSkills className='section personal-skills padding'>
                <div className='container flex flex-column jc-center ai-center'>
                    <h2 className='title  animated'>{title}</h2>
                    <p className='subtitle'>{subtitle}</p>
                    <div className='skills-wrapper flex'>
                        <div className='box soft'>
                            <p className='type'>{softSkill}</p>
                            <ul className='skill-tree'>
                                {
                                    this.state.about.softSkills.map( ({id,skill}) => (
                                        <li key={id} className='flex ai-center jc-end' ><span>{skill}</span> <Li/></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='box hard'>
                            <p className='type'>{hardSkill}</p>
                            <ul className='skill-tree'>
                                {
                                    this.state.about.hardSkills.map( ({id,skill}) => (
                                        <li key={id} className='flex ai-center jc-start' ><Li/><span>{skill}</span></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </PersonaLSkills>
        )
    }
}

export default PersonalSkills;