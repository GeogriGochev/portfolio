import styled from 'styled-components';

export const noMatchSection = styled.div`
    &   {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .message {
            font-size: 24px;
            color:#FF4900;
            &::after{
                content:"]";
            }
            &::before{
                content:"[";
            }
        }

        a {
            margin-top: 60px;
            padding: 10px 20px;
        }
    }
`;