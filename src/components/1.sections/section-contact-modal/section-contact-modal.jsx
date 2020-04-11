import React from 'react';
import { ReactComponent as Close } from '../../../assets/images/icons/close-button.svg';
import ContactForm from '../../form/contact-form.component';
import styled from 'styled-components';

const Modal = styled.div`
    &   {
        position: fixed;
        width: 70%;
        height: 70%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background: #ff6122;
        -webkit-box-shadow: 0px 2px 20px 1px rgba(17, 17, 17, 1);
        -moz-box-shadow: 0px 2px 20px 1px rgba(17, 17, 17, 1);
        box-shadow: 0px 2px 20px 1px rgba(17, 17, 17, 1);
        z-index: -100;
        opacity: 0;
        transform: scale(1.1);
        transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

        &.active {
            z-index: 100;
            opacity: 1;
            transform: scale(1);
        }

        .close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;

            svg {
                width: 30px;
                height: 30px;

                path {
                    fill: #fff;
                }
            }
        }

        .wrapper {
            max-width: 100%;
        }

        .modal-content {
            width: 100%;
            height: 100%;
            padding: 20px;

            .content-wrapper {
                height: 100%;

                .wrapper {
                    h2 {
                        margin-bottom: 60px;
                        text-align: center;
                        color: #fff;
                        font-size: 2.875rem;
                    }

                    .btn {
                        width: 31%;
                        margin: 40px auto 0;
                        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
                        background-color: #fff;
                        border-color: #fff;
                        color: #111;

                        &:hover {
                            transform: scale(0.95);
                        }
                    }

                }

                @media( max-width: 1025px ) {
                    .wrapper {
                        h2 {
                            margin-bottom: 40px;
                        }
                        .btn {
                            margin: 30px auto 0;
                        }
                    }
                }

                @media( max-width: 767px ) {
                    .wrapper {
                        h2 {
                            font-size: 36px;
                        }
                        .btn {
                            width: 100%;
                        }
                    }
                }
            }
        }

        @media( max-width: 768px ) {
            width: 80%;
            height: 80%;
        }

        @media( max-width: 767px ) {
            width: 90%;
            height: 90%;
        }
    }
`;

const ContactModal = ({closeModal}) => (
    <Modal className='modal flex ai-center jc-center'>
        <div className='modal-content'>
            <div className='content-wrapper flex jc-center ai-center'>
                <div className='close-btn' onClick={closeModal}>
                    <Close/>
                </div>
                <div className='wrapper'>
                    <h2>Drop a Line</h2>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </Modal>
)

export default ContactModal;
