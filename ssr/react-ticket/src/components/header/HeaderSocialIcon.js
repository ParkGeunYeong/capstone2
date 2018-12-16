import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as landingActions from '../../redux/modules/base';

import HeaderSearchbar from './HeaderSearchbar'
import HeaderLoginButton from './HeaderLoginButton'





class HeaderSocialIcon extends Component {
    onEnterLanding = () => {
        const { LandingActions } = this.props;
        LandingActions.enterLanding();
    };

    render() {
        const { onEnterLanding } = this;

        return (
            <div className="header_social_icon">
                <HeaderLoginButton onLogin={onEnterLanding}/>
                <HeaderSearchbar/>
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        landing: state.base.landing,
    }),
    (dispatch) => ({
        LandingActions: bindActionCreators(landingActions, dispatch),
    })
)(HeaderSocialIcon));