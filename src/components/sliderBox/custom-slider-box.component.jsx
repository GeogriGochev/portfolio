import React from 'react'
import styled from 'styled-components';

const SlideRBox = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 10px;
    height: 380px;

    a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .image-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        z-index: 0;

        img {
            transform: scale(2);
        }
    }

    .content {
        position: relative;
        width: 100%;
        background-color: #fff;
        padding: 15px 20px;
        transform: translateY(100%);
        opacity: 0;
        transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

        .tag {
            text-transform: uppercase;
            font-size: 12px;
            margin-bottom: 15px;
        }

        .name {
            .inner-text {
                color: #000;
                font-size: 1.25rem;
                position: relative;
                &:after {
                    content:'';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0px;
                    left: 0;
                    background-color: #000;
                    transform: scaleX(0);
                    transform-origin: bottom right;
                    transition: transform 0.3s;
                    transition-delay: 0.30s;
                }
            }
            
            &:hover {
                .inner-text {
                    &:after {
                        transform-origin: bottom left;
                        transform: scaleX(1);
                    }
                }
            }
        }
    }

        &:hover {
            .content {
                transform: translateY(0);
                opacity: 1;

                .name {
                    .inner-text {
                        &:after {
                            transform-origin: bottom left;
                            transform: scaleX(1);
                        }
                    }
                }
            }
        }
        @media( max-width: 1025px ) {
            .content {
                transform: translateY(0);
                opacity: 1;

                .name {
                    .inner-text {
                        &:after {
                            transform-origin: bottom left;
                            transform: scaleX(1);
                        }
                    }
                }
            }
            .image-wrapper  {
                img {
                    transform: scale(2.3);
                }
            }
        }

        @media( max-width: 767px ) {
            margin: 0 5px;
            .image-wrapper  {
                img {
                    transform: scale(2.5);
                }
            }
        }

        @media( max-width: 321px ) {
            .image-wrapper  {
                img {
                    transform: scale(2.8);
                }
            }
        }
    }
`;

const SliderBox = ({linkUrl,imgUrl,tag,name}) => (
    <SlideRBox className='slider-box flex ai-end' data-tag ={tag}>
        <a href={linkUrl} rel="noopener noreferrer" target='_blank'><span className='inner-text'></span></a>
        <div className='image-wrapper'>
            <img src={imgUrl ? imgUrl : 'customIMG'} alt='img'/>
        </div>
        <div className='content'>
            <p className='tag'>{tag}</p>
            <div className='row flex ai-center jc-sb'>
                <p className='name' ><span className='inner-text'>{name}</span></p>
            </div>
        </div>
    </SlideRBox>
)

export default SliderBox;