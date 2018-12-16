import React, {Component} from 'react'
import PageTemplate from '../components/base/PageTemplate';
import LandingTemplateContainer from '../components/container/landing/LandingTemplateContainer';
import Main from '../components/container/main/Main';

class Home extends Component {
    render() {
        return (
            <PageTemplate>
                <LandingTemplateContainer />
                <Main />
            </PageTemplate>
        );
    }
}

export default Home;