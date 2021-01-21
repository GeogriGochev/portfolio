import styled from 'styled-components';

export const Btn = styled.button`
    &   {
        background-color: transparent;
        border-radius: 10px;
        padding: 18px 39px;
        font-size: 1.125rem;
        line-height: 1.6875rem;
        box-shadow: none;
        outline: none;
        border: 1px solid transparent;
        text-transform: capitalize;
        color: #fff;
        cursor: pointer;
        transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

        @media( max-width: 1025px ) {
            padding: 13px 18px;
        }
        
        @media( max-width: 321px ) {
            font-size: 14px;
        }
        ${props => props.trans && `
            border-color: #fff;
            &:hover {
                background-color: #FF4900;
                border-color: #FF4900;
            }
        `}
        ${props => props.orange && `
            background-color: #FF4900;
            border-color: #FF4900;
            &:hover {
                background-color: transparent;
                border-color: #fff;
                color: #FF4900;
            }
        `}
    }
`;