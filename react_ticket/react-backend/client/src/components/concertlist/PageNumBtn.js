import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageNumBtn extends Component {
    render() {
        return (
            <Link to="/concert?page=1" className="btn_num" data-number="0"><span>{this.props.page_number}</span></Link>
        );
    }
}

export default PageNumBtn;