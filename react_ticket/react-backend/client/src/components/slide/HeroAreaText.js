import React, { Component } from 'react';
import HeroAreaTextContent from './HeroAreaTextContent';

class HeroAreaText extends Component {
    render() {
        return (
            <div id="hero_area_text" className="hero_area_text">
                <div className="hero_area_table">
                    <div className="hero_area_table_cell">
                        <HeroAreaTextContent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroAreaText;