import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap'

class HeaderNavToggle extends Component {
    render() {
        return (
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
        );
    }
}

export default HeaderNavToggle;