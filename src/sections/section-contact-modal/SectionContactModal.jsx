import React from 'react';
import { ReactComponent as Close } from '../../assets/images/icons/close-button.svg';
import ContactForm from '../../components/form/ContactForm';
import {modalStyles} from './SectionContactModal.styles';

const Modal = modalStyles;

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
