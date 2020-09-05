import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import Button from '../buttons/button-hire.component';
import {THeaderStyles} from '../../assets/styles';
import MobileNav from './mobile-nav.component';



const THeader = THeaderStyles;

class Header extends Component {    
    render() {    
        return (
            <THeader className='header'>
                <div className='container'>
                    <div className='flex jc-sb ai-center desk-nav'>
                        <div className='logo'>
                            <NavLink className='logo-wrapper' to='/portfolio'>
                                <Logo className='svg'/>
                            </NavLink>
                        </div>
                        <div className='rest flex ai-end'>
                            <ul className='nav flex ai-center'>
                                <li><NavLink exact={true} to='/portfolio'> <span className='inner-text'>Home</span> </NavLink></li>
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
}

export default Header;