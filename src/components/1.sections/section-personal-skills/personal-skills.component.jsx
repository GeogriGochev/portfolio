import React, { Component } from 'react';
import { ReactComponent as Li } from '../../../assets/images/icons/circle.svg';
import styled from 'styled-components';
import CONTENT_DATA from '../../../content';

const PersonaLSkills = styled.div`
    &   {
        padding: 50px 0 100px;
        background: url('../../../assets/images/work.png') no-repeat;
        background-attachment: fixed;
        background-position: 56% 240px;

        .title {
            font-weight: 500;
            color: #fff;
            font-size: 2.5rem;
            line-height: 3.125rem;
            margin-bottom: 20px;
        }

        .subtitle {
            color: #fff;
            font-size: 1.125rem;
            line-height: 2.1875rem;
            font-weight: 300;
            position: relative;
            padding-bottom: 20px;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
                height: 2px;
                width: 250px;
                background: #FF4900;
            }
        }

        .skills-wrapper {
            margin-top: 75px;
            width: 100%;
            position: relative;

            .box {
                width: 100%;
                flex: 0 1 50%;
                max-width: 50%;

                .type {
                    font-size: 1.25rem;
                    padding: 0 20px;
                    line-height: 2.125rem;
                    background: #FF4900;
                    color: #fff;
                    height: 34px;
                    margin-bottom: 20px;
                    display: inline-block;
                }

                ul {
                    width: 100%;
                }

                li {
                    height: 40px;

                    span {
                        line-height: 1.875rem;
                        font-size: 1rem;
                        color: #fff;
                        letter-spacing: 0.5px;
                    }

                    svg {
                        width: 20px;
                    }
                }

                &.soft {
                    text-align: right;

                    li {
                        padding-right: 25px;

                        svg {
                            margin-left: 15px;
                        }
                    }
                }

                &.hard {
                    border-left: 2px solid #FF4900;
                    padding-top: 310px;

                    li {
                        padding-left: 25px;

                        svg {
                            margin-right: 15px;
                        }
                    }
                }
            }
        }

        @media( max-width: 1025px ) {
            padding: 0 0 80px;
        }

        @media( max-width: 768px ) {
            padding: 0 0 60px;

            .subtitle {
                text-align: center;
            }
        }

        @media( max-width: 767px ) {
            .skills-wrapper {
                flex-wrap: wrap;
                .box {
                    flex: 0 1 100%;
                    max-width: 100%;
                    &.soft {
                        text-align: left;
                        border-left: 2px solid #FF4900;

                        li {
                            justify-content: flex-end;
                            padding-left: 25px;
                            padding-right: 0;
                            flex-direction: row-reverse;

                            svg {
                                margin-left: 0;
                                margin-right: 15px;
                            }
                        }
                    }
                    &.hard {
                        padding-top: 30px;
                    }
                }
            }
        }
        
    }
`;

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