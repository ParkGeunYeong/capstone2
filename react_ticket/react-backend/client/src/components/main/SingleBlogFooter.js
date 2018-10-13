import React, { Component } from 'react';

class SingleBlogFooter extends Component {
    render() {
        return (
            <div className="single_blog_footer">
                <p><a href="single_blog.html">Continue Reading <i class="fa fa-long-arrow-right"></i> </a></p>
                <span class="footer_social">
                    <span class="footer_share">Share :</span>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="google-plus"><i class="fa fa-google-plus"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="tumblr"><i class="fa fa-tumblr"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="linkedin"><i class="fa fa-linkedin"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="top" title="pinterest"><i class="fa fa-pinterest-p"></i></a>
                </span>
            </div>
        );
    }
}

export default SingleBlogFooter;