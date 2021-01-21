import React, { useState } from 'react';
import {MobilENavStyles} from './MobileNav.style';
import { NavLink } from 'react-router-dom';
import Button from '../buttons/ButtonHire';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import BackgroundImage from '../../assets/images/mobile-nav.jpg';

const MobilENav = MobilENavStyles;

export const MobileNav = () => {
    const [mobileNav,setMobileNav] = useState({
        on: false
    })
    const {on} = mobileNav;
    const toggleNav = () => {
        setMobileNav({
            on: !mobileNav.on
        })
        !on  ? 
        document.querySelector('body').classList.add('active')
        :
        document.querySelector('body').classList.remove('active')
    }

    return (
        <MobilENav className='mobile-nav'>
            <div className='row flex ai-center jc-sb'>
                <div className='logo'>
                    <NavLink className='logo-wrapper' to='/'>
                        <Logo className='svg'/>
                    </NavLink>
                </div>
                <div className={`button-nav ${ on ? 'active' : ''}`} onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`toggle-nav ${ on ? 'active' : ''}`} >
                <img src={BackgroundImage} className='mobile-back' alt='mobile-back'/>
                <div className='nav-wrapper'>
                    <ul className='nav flex flex-column ai-start'>
                        <li><NavLink exact={true} to='/'> <span className='inner-text'>Home</span> </NavLink></li>
                        <li><NavLink to="/projects"> <span className='inner-text'>Projects</span> </NavLink></li>
                        <li><NavLink to="/about"> <span className='inner-text'>About</span></NavLink></li>
                        <li><Button >Hire me!</Button></li>
                    </ul>
                </div>
            </div>
        </MobilENav>
    )
}


export default MobileNav;
