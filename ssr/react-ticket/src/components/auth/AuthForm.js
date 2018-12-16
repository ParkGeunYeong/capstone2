import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//import classnames from 'classnames'; //유효성검사
const AuthForm = ({id, pw, onChange}) => {
    return (
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    value={id}
                    onChange={onChange}
                    name="id"
                    // className="form-control"
                    // name="name"
                    // onChange={ this.handleInputChange }
                    // value={ this.state.name }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={pw}
                    onChange={onChange}
                    name="pw"
                    // className="form-control"
                    // name="email"
                    // onChange={ this.handleInputChange }
                    // value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        로그인
                    </button>
                </div>
            </div>
    )
}

export default withRouter(connect(
    (state) => ({
        landing: !state.base.landing,
    })
)(AuthForm));

class LandingTemplateContainer extends Component {
    render() {
        if(this.props.landing) return null;
        return (
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    // className="form-control"
                    // name="name"
                    // onChange={ this.handleInputChange }
                    // value={ this.state.name }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    // className="form-control"
                    // name="email"
                    // onChange={ this.handleInputChange }
                    // value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        로그인
                    </button>
                </div>
            </div>
        );
    }
}

