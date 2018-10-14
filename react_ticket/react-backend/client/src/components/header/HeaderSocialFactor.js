import React, { Component } from 'react';

class HeaderSocialFactor extends Component {
    render() {
        return (
            <a href={this.props.link}>
                <i className={this.props.cName}></i>
            </a>
        );
    }
}

export default HeaderSocialFactor;