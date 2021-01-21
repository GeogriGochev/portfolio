import React from 'react'
import {InputBoxStyles} from './InputField.styles';

const InputBox = InputBoxStyles;

const FormInput = ({handleChange, ...otherProps}) => (
    <InputBox className='input-box flex jc-center ai-center'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
    </InputBox>
)

export default FormInput;