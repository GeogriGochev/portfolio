import React, { Component } from 'react';
import {MobilENavStyles} from '../../assets/styles';
import { NavLink } from 'react-router-dom';
import Button from '../buttons/button-hire.component';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const MobilENav = MobilENavStyles;

class MobileNav extends Component {
    constructor() {
        super();

        this.state = {
            on: false
        }
    }

    toggleNav = () => {
        this.setState({
            on: !this.state.on
        })
        !this.state.on  ? 
        document.querySelector('body').classList.add('active')
        :
        document.querySelector('body').classList.remove('active')
    }

    render() {
        const {on} = this.state;
        return (
            <MobilENav className='mobile-nav'>
                <div className='row flex ai-center jc-sb'>
                    <div className='logo'>
                        <NavLink className='logo-wrapper' to='/portfolio'>
                            <Logo className='svg'/>
                        </NavLink>
                    </div>
                    <div className={`button-nav ${ on ? 'active' : ''}`} onClick={this.toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`toggle-nav ${ on ? 'active' : ''}`} >
                    <img src={require('../../assets/images/mobile-nav.jpg')} className='mobile-back' alt='mobile-back'/>
                    <div className='nav-wrapper'>
                        <ul className='nav flex flex-column ai-start'>
                            <li><NavLink exact={true} to='/portfolio'> <span className='inner-text'>Home</span> </NavLink></li>
                            <li><NavLink to="/projects"> <span className='inner-text'>Projects</span> </NavLink></li>
                            <li><NavLink to="/about"> <span className='inner-text'>About</span></NavLink></li>
                            <li><Button >Hire me!</Button></li>
                        </ul>
                    </div>
                </div>
            </MobilENav>
        )
    }
}

export default MobileNav;
