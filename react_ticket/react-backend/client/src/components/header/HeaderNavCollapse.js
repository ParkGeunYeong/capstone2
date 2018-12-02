import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class HeaderNavCollapse extends Component {
    render() {
        return (
            <Navbar.Collapse>
                <Nav>
                    <NavItem componentClass={Link} href="/" to="/">Home</NavItem>
                    <NavItem componentClass={Link} href="/test" to="/test">공연목록</NavItem>
                    <NavItem componentClass={Link} href="/tickettrade" to="/tickettrade">티켓거래</NavItem>
                    <NavItem componentClass={Link} href="/" to="/mypage">마이페이지</NavItem>
                </Nav>
            </Navbar.Collapse>
        );
    }
}

export default HeaderNavCollapse;