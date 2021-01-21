import styled from 'styled-components';

export const ProjecTBoxStyles = styled.div`
&.box {
    flex: 0 1 33%;
    max-width: 33%;

    .content-wrapper {
        margin: 0 15px;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 380px;
        border-radius: 10px;
        box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 1);

        a {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
        }
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

    .loading {
        text-align: center;

        span {
            display: inline-block;
            vertical-align: middle;
            width: 10px;
            height: 10px;
            margin: 50px auto;
            background: #551800;
            border-radius: 50px;
            animation: loader 0.9s infinite alternate;

            &:nth-of-type(2) {
                animation-delay: 0.3s;
                background: #FF4900;
                margin: 0 4px;
            }

            &:nth-of-type(3) {
                animation-delay: 0.6s;
                background: #ff7944;
            }

            @keyframes loader {
                0% {
                    width: 10px;
                    height: 10px;
                    opacity: 0.9;
                    transform: translateY(0);
                }

                100% {
                    width: 24px;
                    height: 24px;
                    opacity: 0.1;
                    transform: translateY(-21px);
                }
            }
        }
    }

    .soon {
        display: none;
        position: absolute;
        top: 33px;
        justify-content: center;
        align-items: center;
        right: -53px;
        background: #FF4900;
        color: #fff;
        z-index: 1;
        padding: 10px;
        font-size: 14px;
        transform: rotate(45deg);
        width: 200px;
    }

    .content {
        width: 100%;
        background-color: #fff;
        padding: 15px 20px;
        transform: translateY(100%);
        opacity: 0;
        transition: 0.35s ease-in-out;

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

    &.svg {
        .image-wrapper {
            text-align: center;

            img {
                transform: scale(1);
            }
        }
    }

    &.soon-tag {
        .soon {
            display: flex;
    }
    }

    &.down {
        margin-bottom: 40px;

        .content-wrapper {
            height: 480px;

            .image-wrapper {
                img {
                    transform: scale(2.3);
                }
            }
        }
    }

    @media( max-width: 1440px ) {
        .image-wrapper {
            img {
                transform: scale(2.5);
            }
        }
    }

    @media( max-width: 1024px ) {
        .content-wrapper {
            height: 328px;
        }
        .content {
            transform: translateY(0);
            opacity: 1;
        }
        &.down {
            .content-wrapper {
                height: 405px;
                .image-wrapper {
                    img {
                        transform: scale(3);
                    }
                }
            }                
        } 
        &.svg {
            .image-wrapper {
                top: 40%;
            }
        }           
    }

    @media( max-width: 768px ) {
        flex: 0 1 50%;
        max-width: 50%;
        margin-bottom: 30px;
        &.down {
            margin-bottom: 30px;
            .content-wrapper {
                height: 328px;
            }
        }
    }

    @media( max-width: 767px ) {
        flex: 0 1 100%;
        max-width: 100%;
        .content-wrapper {
            margin: 0;
        }
    }
}
`;