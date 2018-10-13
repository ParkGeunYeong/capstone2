import React, { Component } from 'react';
import HeroAreaItem from './HeroAreaItem'

class HeroArea extends Component {
    render() {
        return (
            <div id="slide_wrap" className="hero_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
                            <div className="hero_area_list hero_effect">
                                <HeroAreaItem/>
                                <HeroAreaItem/>
                                <HeroAreaItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroArea;