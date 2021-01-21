
import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
&   {
    overflow: hidden;
    position: relative;

    .box {
        flex: 0 1 50%;
        max-width: 50%;

        &.image-wrapper {
            overflow: hidden;
            min-height: 953px;

            img {
                position: absolute;
                top: -58px;
                left: 26%;
                width: auto;
                height: auto;
                min-height: 953px;
                z-index: 0;
            }
        }

        &.text-content {
            .content-wrapper {
                position: relative;
                z-index: 1;
                transform: translateY(-100px);

                .title {
                    font-size: 5rem;
                    line-height: 6.25rem;
                    margin-bottom: 18px;
                    color: #fff;
                    position: relative;

                    &::before {
                        content: attr(data-tooltip);
                        position: absolute;
                        top: -85px;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #FF4900;
                        color: #fff;
                        width: 200px;
                        height: 64px;
                        font-size: 1.375rem;
                        font-weight: 300;
                        line-height: 2.0625rem;
                        border-radius: 5px;
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        top: -22px;
                        left: 40px;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 20px 20px 0 0;
                        border-color: #FF4900 transparent transparent transparent;
                    }
                }

                .subtitle {
                    font-size: 1.375rem;
                    line-height: 2.0625rem;
                    color: #fff;
                    font-weight: 300;
                    margin-bottom: 67px;
                }

                .buttons-wrapper {
                    .btn {
                        &:first-child {
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    }
    @media( max-width: 1441px ) {
        .box.image-wrapper {

            img {
                left: 10%;
            }
        }
    }
    @media( max-width: 1300px ) {
        .box {

            &.text-content {
                .content-wrapper {
                    .title {
                        font-size: 4rem;
                    }
                }
            }

            &.image-wrapper {
                min-height: 785px;

                img {
                    min-height: auto;
                }
            }
        }
    }

    @media( max-width: 1025px ) {
        .box {
            &.text-content {
                margin-top: 100px;
                .content-wrapper {
                    transform: none;
                    .title {
                        margin-bottom: 14px;
                        &::before {
                            top: -73px;
                            width: 159px;
                            height: 51px;
                        }
                    }
                    .subtitle {
                        margin-bottom: 35px;
                    }
                }
            }
            &.image-wrapper {
                min-height: 585px;
            }
        }
    }
    @media( max-width: 768px ) {
        .container {
            padding: 0;
        }

        .row {
            flex-wrap: wrap;
        }

        .box {
            flex: 0 1 100%;
            max-width: 100%;

            &.text-content {
                position: absolute;
                margin-top: 0;
                bottom: -41%;
                left: 0;
                height: 100%;
                padding: 0 30px;

                .content-wrapper {

                    .title {
                        font-size: 3rem;
                        line-height: 4.25rem;
                        &::before {
                            width: 112px;
                            height: 42px;
                            font-size: 1rem;
                            top: -63px;
                        }
                        &::after {
                            top: -25px;
                        }
                    }

                    .subtitle {
                        font-size: 23px;
                        line-height: 23px;
                    }
                }
            }

            &.image-wrapper {
                min-height: auto;
                
                img {
                    position: relative;
                    left: 0;
                    top: 0;
                }
            }
        }
    }

    @media( max-width: 767px ) {
        overflow: visible;
        margin-bottom: 28px;
        .box {
            &.text-content {
                bottom: -62%;
                .content-wrapper {
                    .title {
                        font-size: 30px;
                        line-height: 48px;
                        margin-bottom: 0px;
                    }
                    .subtitle {
                        font-size: 16px;
                        line-height: 23px;
                        margin-bottom: 80px;
                    }
                }
            }
        }
    }
    @media( max-width: 321px ) {
        .box {
            &.text-content {
                bottom: -56%;
                .content-wrapper {
                    .subtitle {
                        margin-bottom: 65px;
                    }
                }
            }
            
        }
    }
}
`;