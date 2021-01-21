import styled from 'styled-components';

export const SkilLBoxStyles = styled.div`
flex: 0 1 32%;
max-width: 32%;
margin: 0 2.4px 30px;
width: 100%;

.wrapper {
    width: 100%;
    max-width: 96%;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 1);
    border-radius: 5px;
    padding: 20px;
    position: relative;
    background-color: transparent;
    transition: 0.35s ease-in-out;
    cursor: pointer;

    .icon-wrapper {
        width: 87px;
        height: 87px;
        border-radius: 50%;
        overflow: hidden;
        background: #000;

        svg {
            max-width: 36px;
            width:36px;

            path {
                fill: #fff;
                transition: 0.35s ease-in-out;
            }

            .st0 {
                fill:none;
                stroke:#fff;
                stroke-width:8;
                transition: 0.35s ease-in-out;
            }
        }
    }

    .skill {
        margin-left: 23px;
    }

    .name {
        font-size: 1.5625rem;
        line-height: 2.1875rem;
        color: #fff;
    }

    &:hover {
        background-color: #FF4900;

        .icon-wrapper {
            svg {
                path {
                    fill: #FF4900;
                }
                
                .st0{
                    stroke:#FF4900;
                }
            }
        }
    }
}
@media( max-width: 1025px ) {
    flex: 0 1 33%;
    max-width: 33%;
    margin: 0 0 30px;

    .wrapper {
        padding: 10px 20px;

        .icon-wrapper {
            transform: scale(0.8);
        }

        .skill {
            margin-left: 13px;
            .name {
                font-size: 1.3125rem;
                line-height: 2.1875rem;
            }
        }
    }
}

@media( max-width: 768px ) { 
    flex: 0 1 50%;
    max-width: 50%;
}

@media( max-width: 767px ) { 
    flex: 0 1 100%;
    max-width: 100%;

    .wrapper {
        padding: 10px 5px;
        .skill {
            .name {
                font-size: 1rem;
            }
        }
    }
}
`;