import React, { Component } from 'react';
import HeaderNavToggle from './HeaderNavToggle';
import HeaderNavCollapse from './HeaderNavCollapse';

class HeaderMainMenu extends Component {
    render() {
        return (
            <div className="mainmenu">
                <HeaderNavToggle/>
                <HeaderNavCollapse/>
            </div>
        );
    }
}

export default HeaderMainMenu;