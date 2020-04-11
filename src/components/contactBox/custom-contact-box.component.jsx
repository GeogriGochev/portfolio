import React from 'react';
import  styled from 'styled-components';

const ContacTBox = styled.div`
    .content-wrapper {
        max-width: 100%;
        border-radius: 10px;
        .icon-wrapper {
            position: relative;
            width: 49px;
            height: 49px;
            border-radius: 50%;
            border: 1px solid #6B6B6B;
            margin-right: 25px;
            transition: 0.35s ease-in-out;
    
            svg {
                path {
                     transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);
                }
            }
        }
        .info-box {
            .tite {
                font-weight: 300;
                color: #6B6B6B;
                font-size: 1.125rem;
                line-height: 25px;
                display: inline-block;
                width: 100%;
                text-align: left;
                margin-bottom: 2px;
            }
            a {
                font-weight: 300;
                color: #fff;
                font-size: 22px;
                line-height: 25px;
            }
        }
        &:hover {
            .icon-wrapper {
                border-color: #fff;
                svg {
                    path {
                        fill:#FF4900;
                    }
                }
            }
        }
    }

    @media( max-width: 767px ) {
        & + .contact-box {
            margin-top: 30px;
        }
    }
`;

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
