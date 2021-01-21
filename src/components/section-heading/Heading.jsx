import React from 'react';
import { ReactComponent as Dash } from '../../assets/images/icons/dash.svg';
import {SectioNHeadingStyles} from './Heading.styles';

const SectioNHeading = SectioNHeadingStyles;

const SectionHeading = ({title,children}) => (
    <SectioNHeading className='section-heading flex jc-center ai-center flex-wrap'>
        <Dash/>
        <h2 className='title'>{title}</h2>
        <p className='subtitle animated'>{children}</p>
    </SectioNHeading>
)

export default SectionHeading;
