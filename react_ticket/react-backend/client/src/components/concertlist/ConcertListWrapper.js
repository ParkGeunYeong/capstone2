import React, { Component } from 'react';
import SingleConcert from './SingleConcert';

class ConcertListWrapper extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xs-12'>
                        <SingleConcert/>
                        <SingleConcert/>
                        <SingleConcert/>
                        <SingleConcert/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConcertListWrapper;