import React, { Component } from 'react';
import Button from '../../buttons/button-hire.component';
import styled from 'styled-components';
import CONTENT_DATA from '../../../content';

const ContacTSection = styled.div`
    &   {
        background: url(${require('../../../assets/images/hire.jpg')}) no-repeat center;
        background-size: cover;
        padding: 170px;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.5;
            z-index: 0;
        }

        .content-wrapper {
            position: relative;
        }

        .subtitle {
            text-align: center;
            font-size: 1.375rem;
            line-height: 1.875rem;
            font-weight: 300;
            margin-bottom: 20px;
            color: #fff;
        }

        .title {
            text-align: center;
            font-size: 2.5rem;
            line-height: 3.125rem;
            color: #fff;
            font-weight: 600;
        }

        .btn-wrapper {
            text-align: center;
            margin-top: 60px;

            .btn {
                margin: auto;
            }
        }

        @media( max-width: 1281px ) {
            padding: 125px;
        }

        @media( max-width: 1025px ) {
            padding: 100px;

            .title {
                margin-bottom: 30px;
                font-size: 2.3rem;
            }

            .btn-wrapper {
                margin-top: 30px;
            }
        }

        @media( max-width: 768px ) {
            padding: 100px 0;
        }
    }
`;

class ContactSection extends Component {
    constructor() {
        super();

        this.state = CONTENT_DATA;
    }
    eventModal = () => {
        document.querySelectorAll('div.overlay, body, .modal').forEach(function(element) {
            element.classList.add('active');
        });
    }
    render() {
        const {subtitle,title} = this.state.offerSection
        return (
            <ContacTSection className='section contact-me'>
                <div className='container flex jc-center ai-center flex-column'>
                    <div className='content-wrapper'>
                        <p className='subtitle'>{subtitle}</p>
                        <h2 className='title'>{title}</h2>
                        <div className='btn-wrapper animated'>
                            <Button orange onClick={this.eventModal}>Hire Me!</Button>
                        </div>
                    </div>
                </div>
            </ContacTSection>
        )
    }
}

export default ContactSection;
