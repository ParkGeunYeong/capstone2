import React, { Component } from 'react';
import HeroAreaImg from './HeroAreaImg'
import HeroAreaText from './HeroAreaText' 

class HeroAreaItem extends Component {
    render() {
        return (
            <div id="hero_area_item" className="hero_area_item">
                <HeroAreaImg/>
                <HeroAreaText/>
            </div>
        );
    }
}

export default HeroAreaItem;