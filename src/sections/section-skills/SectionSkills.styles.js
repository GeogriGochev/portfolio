import styled from 'styled-components';

export const SkilLSectionStyle = styled.div`
&   {
    padding: 100px 0;

    .button-wrapper {
        margin: 40px auto 0;
        text-align: center;
        padding-bottom: 20px;
    }

    .label {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 26px;
        margin: 40px 0 30px;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 10px;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            height: 2px;
            width: 150px;
            background: #FF4900;
        }
    }

    @media( max-width: 768px ) {
        padding: 80px 0;
    }
    
    @media( max-width: 767px ) {
        padding: 60px 0;
    }
}
`;