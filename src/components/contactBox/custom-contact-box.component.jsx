import React from 'react';
import {ContacTBoxStyles} from '../../assets/styles';

const ContacTBox = ContacTBoxStyles;

const ContactBox = ({title, href, text ,children}) => (
    <ContacTBox className='contact-box flex ai-center'>
        <div className='content-wrapper flex ai-center'>
            <div className='icon-wrapper flex jc-center ai-center'>
                {children}
            </div>
            <div className='info-box flex flex-wrap jc-start ai-start'>
                <span className='tite'>{title}</span>
                <a href={`${href}`} target='_blank' rel="noopener noreferrer">{text}</a>
            </div>
        </div>
    </ContacTBox>
)

export default ContactBox;
