import React, { Component } from 'react';
import HeaderSearchbar from './HeaderSearchbar'

class HeaderSocialIcon extends Component {


    render() {

        return (
            <div className="header_social_icon">
                {/* <a href="/">
                    <GoogleLogin
                        clientId="916373523653-n5crt61fscmj3st2i68qo1pto19lfr6j.apps.googleusercontent.com"
                        render={renderProps => (
                            <i className="fa fa-google-plus" onClick={renderProps.onClick}></i>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </a> */}
                <HeaderSearchbar/>
            </div>
            // <GoogleLogin
            //     clientId="916373523653-n5crt61fscmj3st2i68qo1pto19lfr6j.apps.googleusercontent.com"
            //     render={renderProps => (
            //         <button className="fa fa-google-plus" onClick={renderProps.onClick}>This is my custom Google button</button>
            //       )}
            //     onSuccess={responseGoogle}
            //     onFailure={responseGoogle}
            // />
        );
    }
}

export default HeaderSocialIcon;
