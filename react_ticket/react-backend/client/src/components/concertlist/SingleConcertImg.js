import React, { Component } from 'react';
import blog_img from '../../img/index_6_blog_img_1.jpg';

class SingleConcertImg extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <img src={blog_img} alt="temp"/>
            </div>
        )
    }
}

export default SingleConcertImg;