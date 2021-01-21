import React, {useContext} from 'react';
import FormInput from '../inputBox/InputField';
import ButtonSubmit from '../buttons/ButtonMain';
import {ContacTFormStyles} from './ContactForm.styles';
import { FormContext } from '../../contexts/FormContext';

const ContacTForm = ContacTFormStyles;

const ContactForm = () => {
    const {name,email,phone,handleChange,handleSubmit} = useContext(FormContext);
    return(
        <ContacTForm className='contact-form'>
            <form onSubmit={handleSubmit} action="https://formspree.io/mdolkgzl" method="POST">
                <div className='flex jc-sb ai-center'>
                    <FormInput handleChange={handleChange} name='text' type='text' value={name} placeholder='Name' required/>
                    <FormInput handleChange={handleChange} name='email' type='email' value={email} placeholder='Email' required/>
                    <FormInput handleChange={handleChange} name='phone' type='phone' value={phone} placeholder='Phone#' required/>
                </div>
                <ButtonSubmit trans type='submit'>Submit</ButtonSubmit>
            </form>
        </ContacTForm>
    )
}

export default ContactForm;
