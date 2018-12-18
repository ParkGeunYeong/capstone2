import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as authActions from '../../../redux/modules/auth';

import AuthFormContainer from './AuthFormContainer'
//import classnames from 'classnames'; //유효성검사

const LandingTemplateContainer = (props) => {
    if(!props.landing) return null;
    if(props.tokenData.auth) return null;
    return (
        <AuthFormContainer />
    );
}

export default withRouter(connect(
    (state) => ({
        landing: state.base.landing,
        tokenData: state.auth.tokenData,
    })
)(LandingTemplateContainer));
