import React from 'react';
import {PagEHeadingStyles} from './SectionPageHeading.styles';

const PagEHeading = PagEHeadingStyles

const PageHeading = ({children, subtittle,mainTitle,paging,projects}) => (
    <PagEHeading className={`section page-heading flex jc-center ai-center ${ projects && 'projects-page' } ${ paging && 'about-page' }`}>
        {children}
        <div className='container flex jc-center ai-center flex-column'>
            <h1 className='main-title '>{mainTitle}</h1>
            <p className='subtitle animated'>{subtittle}</p>
        </div>
    </PagEHeading>
)

export default PageHeading;
