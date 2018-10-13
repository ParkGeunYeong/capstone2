import React, { Component } from 'react';

class HeaderNavCollapse extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">공연목록</a></li>
                    <li><a href="/">티켓거래</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </div>
        );
    }
}

export default HeaderNavCollapse;