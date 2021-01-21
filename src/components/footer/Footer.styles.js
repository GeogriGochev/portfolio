import styled from 'styled-components';

export const BFooterStyles =  styled.div`
.scrollTop {
    position: fixed;
    top: 100px;
    left: auto;
    right: 5%;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto;
    padding: 5px 10px;
    background-color: #FF4900;
    border-radius: 5px;
    transform: rotate(180deg) translateY(40px);
    z-index: 10;
    opacity: 0;
    cursor: pointer;
    transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

    &.show {
        z-index: 9;
        opacity: 1;
        transform: rotate(180deg) translateY(0);
    }
    svg {
        path {
            transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);
        }
    }

    &:hover {
        background-color: #fff;
    
        svg {
            path {
            transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);
            fill: #FF4900;
            }
        }
    }

    @media( max-width: 1441px ) {
        right: 1%;
    }

    @media( max-width: 767px) {
        right: 15px;
    }
}

.footer {
    padding-top: 80px;
    padding-bottom: 60px;
    background-color: rgba(#222,0.5);
    position: relative;

    @media( max-width: 767px ) {
        overflow: hidden;
    }

        .content-wrapper {
            width: 100%;
        }
        .footer-links {
            margin-top: 20px;
        ul {
            margin-bottom: 40px;

            li {
                a {
                    font-size: 1.25rem;
                    color: #fff;
                    font-weight: 500;
                    position: relative;
                    &:after {
                    content:'';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: #fff;
                    transform: scaleX(0);
                    transform-origin: bottom right;
                    transition: transform 0.3s;
                    }
                    &:hover {
                        &:after {
                            transform-origin: bottom left;
                            transform: scaleX(1);
                        }
                    }
                }
                & + li {
                    padding-left: 14px;
                    margin-left: 14px;
                    border-left: 2px solid #fff;
                }
            }
        }
        .row {
            margin: 0 auto 50px;
            position: relative;
            left: 30px;
            @media( max-width: 767px ) {
                left: 0;
            }
        }
    }
    .social {
        max-width: 150px;
        .socail-links {
            padding-bottom: 14px;

            &::before {
                content: '';
                position: absolute;
                background-color: #FF4900;
                border: 1px solid #FF4900;
                height: 80px;
                width: 40%;
                bottom: 60px;
                left: -20%;
                z-index: 0;
                border-radius: 10px;
                transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

                @media( max-width: 768px ) {
                    left: -10%;
                }

                @media( max-width: 767px ) {
                    left: -2%;
                    width: 55%;
                }
            }

            li {
                position: relative;
                .icon {
                    max-height: 50px;
                    max-width: 50px;
                    path,rect {
                    fill: #fff;
                    transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);
                }
            }

            & + li {
                margin-left: 25px;
            }            
        }
    }
    &:hover {
        .socail-links {
            &::before {
                background-color: transparent;
            }
        }
        li {
            .icon {
                path,rect {
                    fill: #FF4900;
                }
            }
        }
    }
    
}
`;