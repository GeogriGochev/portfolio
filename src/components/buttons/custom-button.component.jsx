import React, { Component } from 'react';


class ButtonSubmit extends Component {
    render() {
        const {orange,trans,children} = this.props;
        return (
            <button className={`btn flex jc-center ai-center ${orange && 'orange'} ${trans && 'trans'}`}>
                {children}
            </button>
        )
    }
}

export default ButtonSubmit;