import React, { Component } from 'react';
import SingleBlogTopBtn from './SingleBlogTopBtn'
import SingleBlogTopMark from './SingleBlogTopMark'

class SingleBlogTop extends Component {
    render() {
        return (
            <div className="single_blog_top">
                <SingleBlogTopBtn/>
                <SingleBlogTopMark/>
            </div>
        );
    }
}

export default SingleBlogTop;