import React, { Component } from 'react';
import HeaderNavSocial from './HeaderNavSocial';
import HeaderNavCollapse from './HeaderNavCollapse';

class HeaderBottom extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-7">
                        <div className="mainmenu">
                            <HeaderNavSocial/>
                            <HeaderNavCollapse/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBottom;