import React, { Component } from 'react';
import PageNumBtn from './PageNumBtn'

class PaginateBox extends Component {
    render() {
        return (
            <div className='paginate'>
                <PageNumBtn page_number="1"/>
            </div>
        );
    }
}

export default PaginateBox;