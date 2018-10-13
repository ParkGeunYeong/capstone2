import React, { Component } from 'react';

class SingleBlogBottomMeta extends Component {
    render() {
        return (
            <div className="single_blog_meta">
                <ul>
                    <li><a href="/"><span class="icon-profile-male"></span> Tanvir</a></li>
                    <li><a href="/"><span class="icon-calendar"></span> February 21,2015</a></li>
                    <li><a href="/"><span class="icon-chat"></span> 10 Comments</a></li>
                    <li><a href="/"><span class="icon-heart"></span> 20 Likes</a></li>
                </ul>
            </div>
        );
    }
}

export default SingleBlogBottomMeta;