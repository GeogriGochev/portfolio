import React, {useContext} from 'react';
import Button from '../../components/buttons/ButtonHire';
import {ContacTSection} from './SectionContact.styles';
import {ContactContext} from '../../contexts/ContactSectionContext';

const Section = ContacTSection

export const SectionContact = () => {
    const {title,subtitle,eventModal} = useContext(ContactContext)
    return (
        <Section className='section contact-me'>
            <div className='container flex jc-center ai-center flex-column'>
                <div className='content-wrapper'>
                    <p className='subtitle'>{subtitle}</p>
                    <h2 className='title'>{title}</h2>
                    <div className='btn-wrapper animated'>
                        <Button orange onClick={eventModal}>Hire Me!</Button>
                    </div>
                </div>
            </div>
        </Section>
    )
}


export default SectionContact;
