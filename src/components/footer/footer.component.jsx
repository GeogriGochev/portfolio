import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ContactBox from '../contactBox/custom-contact-box.component';
import { ReactComponent as MailIcon } from '../../assets/images/icons/mail.svg';
import { ReactComponent as CellIcon } from '../../assets/images/icons/phone.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../assets/images/icons/github.svg';
import { ReactComponent as Portfolio }  from '../../assets/images/port.svg';
import { ReactComponent as ScrollUp } from '../../assets/images/icons/arrow-down.svg';
import {BFooterStyles} from '../../assets/styles';

const BFooter = BFooterStyles;

class Footer extends Component {
    scrollTop = () => {
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <BFooter className='bottom-part'>
                <footer className='footer'>
                    <div className='container'>
                        <div className='flex jc-center ai-center'>
                            <div className='content-wrapper ta-center'>
                                <div className='image-wrapper'>
                                    <Portfolio/>
                                </div>
                                <div className='footer-links'>
                                    <ul className='flex jc-center ai-center'>
                                        <li>
                                            <Link to='/portfolio'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/projects'>Projects</Link>
                                        </li>
                                        <li>
                                            <Link to='/about'>About</Link>
                                        </li>
                                    </ul>
                                    <div className='row flex jc-center ai-center flex-wrap'>
                                        <ContactBox 
                                        href='tel: 0876662279'
                                        title='Call Me'
                                        text='0876662279'>
                                            <CellIcon/>
                                        </ContactBox>
                                        <ContactBox
                                            href='mailto:georgevgochev@gmail.com'
                                            title='Email'
                                            text='Mail me here'
                                        >
                                            <MailIcon/>
                                        </ContactBox>
                                    </div>
                                </div>
                                <div className='social flex ai-center jc-start'>
                                    <div className='row flex jc-start ai-start'>
                                        <ul className='socail-links flex jc-start ai-center'>
                                            <li>
                                                <a href='https://www.linkedin.com/in/georgi-gochev-00b199166/' target='_blank' rel="noopener noreferrer">
                                                    <LinkedInIcon  className='icon' alt='icon'/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='https://github.com/GeogriGochev' target='_blank' rel="noopener noreferrer">
                                                    <GitHubIcon className='icon' alt='icon'/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <span className='scrollTop flex jc-center ai-center' onClick={this.scrollTop}>
                    <ScrollUp/>
                </span>
            </BFooter>
        )
    }
}

export default Footer;