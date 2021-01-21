import React from 'react';
import { ReactComponent as Errors } from '../../assets/images/error.svg';
import { NavLink } from 'react-router-dom';
import {noMatchSection} from './NoMatch.styles';

const SectionWrapper = noMatchSection;

export default function NoMatch() {
    return (
        <SectionWrapper className='noMatchWrapper'>
            <Errors className='svg'/>
            <h1 class="message">
                Page not found
            </h1>
            <NavLink className='btn trans'  to='/'>
                To Home
            </NavLink>
        </SectionWrapper>
    )
}
