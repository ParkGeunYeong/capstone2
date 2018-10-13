import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderNavCollapse extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/test">공연목록</Link></li>
                    <li><Link to="/">티켓거래</Link></li>
                    <li><Link to="/">CONTACT</Link></li>
                </ul>
            </div>
        );
    }
}

export default HeaderNavCollapse;