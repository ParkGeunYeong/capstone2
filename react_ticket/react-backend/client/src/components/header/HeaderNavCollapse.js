import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class HeaderNavCollapse extends Component {
    render() {
        return (
            <Navbar.Collapse>
                <Nav>
                    <NavItem href = "../">HOME</NavItem>
                    <NavItem href = "/test">공연목록</NavItem>
                    <NavItem href = "#">티켓거래</NavItem>
                    <NavItem href = "#">CONTACT</NavItem>
                </Nav>
            </Navbar.Collapse>
        );
    }
}

export default HeaderNavCollapse;