import React from 'react'
import styled from 'styled-components';

const InputBox = styled.div`
    &   {
        flex: 0 1 31%;
        max-width: 31%;
        background-color: #111;
        padding: 25px 30px;
        border-radius: 5px;
        box-shadow: 0 10px 38px rgba(0, 0, 0, 0.22), 0 10px 12px rgba(0, 0, 0, 0.22);
        transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

        &:focus,
        &:hover {
            transform: scale(0.98);
            box-shadow: 0 10px 38px rgba(0, 0, 0, 0.42), 0 10px 12px rgba(0, 0, 0, 0.32);
        }

        input {
            border: none;
            color: #fff;
            background-color: transparent;
            font-size: 18px;
            line-height: 30px;
            font-weight: 400;

            &::placeholder {
                color: #fff;
            }
        }

        @media( max-width: 1025px ) {
            flex: 0 1 60%;
            max-width: 60%;
            & + .input-box {
                margin-top: 20px;
            }
        }

        @media( max-width: 768px ) {
            flex: 0 1 80%;
            max-width: 80%;
            input {
                width: 100%;
            }
        }

        @media( max-width: 767px ) {
            flex: 0 1 100%;
            max-width: 100%;
            padding: 15px;
        }
    }
`;

const FormInput = ({handleChange, ...otherProps}) => (
    <InputBox className='input-box flex jc-center ai-center'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
    </InputBox>
)

export default FormInput;