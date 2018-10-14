import React, { Component } from 'react';

class SingleBlogFooter extends Component {
    render() {
        return (
            <div className="single_blog_footer">
                <p><a href="single_blog.html">Continue Reading <i className="fa fa-long-arrow-right"></i> </a></p>
                <span className="footer_social">
                    <span className="footer_share">Share :</span>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="google-plus"><i className="fa fa-google-plus"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="tumblr"><i className="fa fa-tumblr"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="linkedin"><i className="fa fa-linkedin"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="pinterest"><i className="fa fa-pinterest-p"></i></a>
                </span>
            </div>
        );
    }
}

export default SingleBlogFooter;