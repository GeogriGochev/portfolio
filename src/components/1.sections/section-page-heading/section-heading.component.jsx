import React from 'react';
import styled from 'styled-components';

const PagEHeading = styled.div`
    &   {
        height: 100vh;
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.7;
            z-index: 1;
        }

        &::after {
            position: absolute;
            width: 100%;
            height: 100%;
            content: "";
            background-color: #111;
            bottom: -75%;
            left: 0;
            right: 0;
            z-index: 1;
            transform-origin: bottom right;
            transform: skewY(-6deg);
        }

        img {
            position: absolute;
            top: -93%;
            left: 0%;
            z-index: 0;
            transform: scale(0.6);
        }

        .container {
            position: relative;
            top: -10%;
            z-index: 2;

            .main-title {
                font-size: 3.75rem;
                line-height: 4.375rem;
                margin-bottom: 20px;
                color: #fff;
                font-weight: 600;
            }

            .subtitle {
                font-size: 1.375rem;
                line-height: 1.875rem;
                font-weight: 300;
                color: #fff;
            }
        }

        &.projects-page {
            img {
                transform: scale(1);
            }
        }

        
        @media( max-width: 1441px ) {
            &.about-page {
                img {
                    top: -65%;
                }
            }
        }

        @media( max-width: 1367px ) {
            &.about-page {
                img {
                    top: -50%;
                }
            }
        }

        @media( max-width: 1281px ) {
            &.about-page {
                img {
                    top: -60%;
                }
            }
        }

        @media( max-width: 1024px ) {
            img {
                top: -70%;
            }

            &.about-page {
                img {
                    top: -50%;
                }
            }
        }

        @media( max-width: 768px ) {
            img {
                top: 0%;
            }

            &.about-page {
                img {
                    top: -10%;
                    transform: scale(1);
                }
            }
        }

        @media( max-width: 767px ) {
            height: 70vh;
            &:before {
                opacity: 0.9;
            }

            .container {
                .main-title {
                    font-size: 3.125rem;
                }
                .subtitle {
                    text-align: center;
                }
            }

            &.about-page {
                img {
                    top: -15%;
                }
            }
        }
    }
`;

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
