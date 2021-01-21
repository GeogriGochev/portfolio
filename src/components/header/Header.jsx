import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import Button from '../buttons/ButtonHire';
import {THeaderStyles} from './Header.style';
import MobileNav from './MobileNav';

const THeader = THeaderStyles;

const Header = () => {
    return (
        <THeader className='header'>
            <div className='container'>
                <div className='flex jc-sb ai-center desk-nav'>
                    <div className='logo'>
                        <NavLink className='logo-wrapper' to='/'>
                            <img src={Logo} alt="logo"/>
                        </NavLink>
                    </div>
                    <div className='rest flex ai-end'>
                        <ul className='nav flex ai-center'>
                            <li><NavLink exact={true} to='/'> <span className='inner-text'>Home</span> </NavLink></li>
                            <li><NavLink to="/projects"> <span className='inner-text'>Projects</span> </NavLink></li>
                            <li><NavLink to="/about"> <span className='inner-text'>About</span></NavLink></li>
                        </ul>
                        <Button orange>Hire me!</Button>
                    </div>
                </div>
                <MobileNav/>
            </div>
        </THeader>
    )
}


export default Header;