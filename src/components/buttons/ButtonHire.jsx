import React, { Component } from 'react';
import {Btn} from './ButtonHire.styles';

class Button extends Component {
    clicks = () => {
        document.querySelectorAll('.overlay, body, .modal').forEach(function(element) {
            element.classList.add('active')
        });      
    }

    render() {
        const {children, ...otherProps} = this.props;
        return (
            <Btn {...otherProps}  onClick={this.clicks}>
                {children}
            </Btn>
        )
    }
}

export default Button;