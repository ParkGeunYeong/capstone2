import React, { Component } from 'react';
import SingleConcertImg from './SingleConcertImg';
import SingleConcertContent from './SingleConcertContent';

class SingleConcert extends Component {
    render() {
        return (
            <div className="row row-bottom-padding">
                <SingleConcertImg/>
                <SingleConcertContent/>
            </div>
        );
    }
}

export default SingleConcert;