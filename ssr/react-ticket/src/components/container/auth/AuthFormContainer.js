// @flow
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as authActions from '../../../redux/modules/auth';

import AuthForm from '../../auth/AuthForm';

class AuthFormContainer extends Component {
  onChange = (e) => {
    const { AuthActions, loginForm } = this.props; 
    console.log(e.target);
    AuthActions.setLoginInput(e.target);
    console.log("id : "+loginForm.id);
    console.log("pw : "+loginForm.pw);
  }

  render() {
    const { onChange } = this;
    const { loginForm, sentEmail } = this.props;

    return (
      <AuthForm
        id={loginForm.id}
        pw={loginForm.pw}
        onChange={onChange}
      />
    );
  }
}

export default withRouter(connect(
  (state) => ({
      loginForm: state.auth.loginForm,
      sentEmail: state.auth.sentEmail
  }),
  (dispatch) => ({
      AuthActions: bindActionCreators(authActions, dispatch),
  })
)(AuthFormContainer));