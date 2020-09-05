import React, { Component } from 'react';
import FormInput from '../inputBox/input-field.component';
import ButtonSubmit from '../buttons/custom-button.component';
import {ContacTFormStyles} from '../../assets/styles';

const ContacTForm = ContacTFormStyles;

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            textarea: '',
            status: ''
        }
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ 
                name: '',
                email: '',
                phone: '',
                textarea: '',
                status: 'SUCCESS'
            });

            document.querySelectorAll('div.overlay, body,.modal').forEach(function(element) {
                element.classList.remove('active')
            });
            document.querySelector('.thanks').classList.add('active')
            setTimeout(() => {
                document.querySelector('.thanks').classList.remove('active')
            }, 4000);

          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
    }
  

    handleChange = e => {
        const { value,name} = e.target;
        this.setState({[name]: value})
    }

    render() {

        return(
            <ContacTForm className='contact-form'>
                <form onSubmit={this.handleSubmit} action="https://formspree.io/mdolkgzl" method="POST">
                    <div className='flex jc-sb ai-center'>
                        <FormInput handleChange={this.handleChange} name='text' type='text' value={this.state.text} placeholder='Name' required/>
                        <FormInput handleChange={this.handleChange} name='email' type='email' value={this.state.email} placeholder='Email' required/>
                        <FormInput handleChange={this.handleChange} name='phone' type='phone' value={this.state.phone} placeholder='Phone#' required/>
                    </div>
                    <ButtonSubmit trans type='submit'>Submit</ButtonSubmit>
                </form>
            </ContacTForm>
        )
    };
}

export default ContactForm;