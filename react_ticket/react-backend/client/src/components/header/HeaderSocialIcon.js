import React, { Component } from 'react';
import HeaderSocialIconFactor from './HeaderSocialFactor';

class HeaderSocialIcon extends Component {
    render() {
        return (
            <div className="header_social_icon">
                <HeaderSocialIconFactor link="/" cName="fa fa-facebook"/>
                <HeaderSocialIconFactor link="/" cName="fa fa-twitter"/>
                <HeaderSocialIconFactor link="/" cName="fa fa-google-plus"/>
                <HeaderSocialIconFactor link="/" cName="fa fa-tumblr"/>
            </div>
        );
    }
}

export default HeaderSocialIcon;