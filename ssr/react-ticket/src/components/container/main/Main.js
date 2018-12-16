import React, {Component} from 'react'
import HeroArea from '../../slide/HeroArea';
import MainWrapper from '../../main/MainWrapper';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


import * as landingActions from '../../../redux/modules/base';

class Home extends Component {
    render() {
        if(this.props.landing) return null;
        return (
            <React.Fragment>
                <HeroArea />
                <MainWrapper />
            </React.Fragment>
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
)(Home));