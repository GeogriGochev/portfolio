import styled from 'styled-components';

export const AboutHomeStyles = styled.div`
&   {
    padding: 120px 0;

    .box {
        flex: 0 1 50%;
        max-width: 50%;
        padding-left: 80px;

        &.image-wrapper {
            position: relative;

            img {
                filter: grayscale(100%);
            }
        }

        .svg {
            position: absolute;
            bottom: -80px;
            left: 0px;
        }

        &.text-content {
            .title {
                font-size: 2.5rem;
                line-height: 3.125rem;
                font-weight: 500;
                color: #fff;
                margin-bottom: 42px;
            }

            .content {
                margin-bottom: 85px;
                max-width: 650px;

                p {
                    font-size: 1.125rem;
                    line-height: 2.1875rem;
                    font-weight: 300;
                    color: #fff;
                }
            }

            button {
                &:first-child {
                    margin-right: 20px;
                }
            }
        }

    }
    @media( max-width: 1281px ) {
        .box {
            .svg {
                max-width: 200px;
            }
        }
    }
    @media( max-width: 1025px ) {
        padding: 120px 0 60px;
        .box {
            padding-left: 0px;
            .svg {
                left: -25px;
            }
            &.text-content {
                padding-left: 40px;
                padding-top: 50px;
                .title {
                    margin-bottom: 30px;
                }
                .content {
                    margin-bottom: 40px;
                }
            }
        }
    }

    @media( max-width: 768px ) {
        .box {
            flex: 0 1 100%;
            max-width: 100%;
            &.image-wrapper {
                max-height: 400px;
                overflow: hidden;
                .svg {
                    left: 28px;
                    bottom: 0;
                }
            }
            &.text-content {
                padding-left: 0;
            }
        }
    }

    @media( max-width: 767px ) {
        .box {

            &.text-content {

                .title {
                    font-size: 1.875rem;
                    margin-bottom: 20px;
                }
                
                .content {
                    p {
                        font-size: 1.125rem;
                        line-height: 2rem;
                    }
                }
            }
            
            &.image-wrapper {
                .svg {
                    max-width: 150px;
                }
            }
        }
    }
}
`;