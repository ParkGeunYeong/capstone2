import React, { Component } from 'react';

class HeaderSocialIcon extends Component {
    render() {
        return (
            <div className="header_social_icon">
                <a href="/"><i className="fa fa-facebook"></i></a>
                <a href="/"><i className="fa fa-twitter"></i></a>
                <a href="/"><i className="fa fa-google-plus"></i></a>
                <a href="/"><i className="fa fa-tumblr"></i></a>
            </div>
        );
    }
}

export default HeaderSocialIcon;