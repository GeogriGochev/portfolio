import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../buttons/button-hire.component';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const MobilENav = styled.div`
    & {
        display:none;
        .button-nav {
            position: relative;
            width: 30px;
            height: 20px;
            cursor: pointer;
    
            span {
                position: absolute;
                height: 2px;
                width: 50%;
                background: #fff;
                opacity: 1;
                transition: 0.35s ease-in-out;
    
                &:nth-child(1),
                &:nth-child(2) {
                    top: 0;
                }
    
                &:nth-child(3),
                &:nth-child(4) {
                    top: 10px;
                }
    
                &:nth-child(5),
                &:nth-child(6) {
                    top: 20px;
                }
    
                &:nth-child(even) {
                    left: 50%;
                }
            }
    
            &.active {
                span {
                    background: #FF4900;
                    &:nth-child(1) {
                        transform: translateX(5px) translateY(7px) rotate(45deg);
                    }
                    &:nth-child(2) {
                        transform: translateX(-5px) translateY(7px) rotate(-45deg);
                    }
                    &:nth-child(3) {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    &:nth-child(4) {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    &:nth-child(5) {
                        transform: translateX(5px) translateY(-8px) rotate(-45deg);
                    }
                    &:nth-child(6) {
                        transform: translateX(-5px) translateY(-8px) rotate(45deg);
                    }
                }
            }
        }

        .logo {
            .svg {
                max-width: 100px;
            }
        }


        .toggle-nav {
            background: #FF4900;
            position: fixed;
            top: 88px;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 100;
            padding: 30px 15px;
            opacity: 0;
            transform: translateX(-100%);
            transition: 0.55s cubic-bezier(0.07, 0.08, 0.16, 0.99);

            .mobile-back {
                position: absolute;
                top: -88px;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
                opacity: 0;
                transition: 0.35s ease-in-out;
                transition-delay: 0.55s;
            }

            .nav {
                position: relative;
                li {
                    background: #000;
                    box-shadow: 0 10px 38px rgba(0, 0, 0, 0.22), 0 10px 12px rgba(0, 0, 0, 0.22);
                    padding: 10px 30px;
                    border-radius: 4px;
                    opacity: 0;
                    transform: translateX(50px);
                    transition: 0.55s cubic-bezier(0.07, 0.08, 0.16, 0.99);
                    & + li {
                        margin-top: 25px;
                      }
                    a {
                        color: #fff;
                        font-size: 1.125rem;
                        line-height: 1.6875rem;
                    }
                    
                    &:last-child {
                        button {
                            padding: 0;
                            color: #FF4900;
                            font-size: 1.125rem;
                        }
                    }

                    &:nth-child(1) {
                        transition-delay: 1.1s;
                    }

                    &:nth-child(2) {
                        transition-delay:  1.3s;
                    }

                    &:nth-child(3) {
                        transition-delay:  1.5s;
                    }

                    &:nth-child(4) {
                        transition-delay:  1.7s;
                    }
                }
            }

            &.active {
                opacity: 1;
                transform: translateX(0);
                .mobile-back {
                    opacity: 1;
                }
                .nav {
                    li {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            }
        }


        @media( max-width: 767px ) {
            display:block;
        }
    }
`;

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
                        <NavLink className='logo-wrapper' to='/'>
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
}

export default MobileNav;
