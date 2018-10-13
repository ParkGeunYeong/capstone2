import React, { Component } from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import '../../styles/style.css'

class HeaderArea extends Component {
    render() {
        return (
            <div id="header_wrap" className="header_area">
                <HeaderTop/>
                <HeaderBottom/>
            </div>
        );
    }
}

export default HeaderArea;