import React, { Component } from 'react';
import SingleConcertContentBtn from './SingleConcertContentBtn';


class SingleConcertContent extends Component {
    render() {
        return (
            <div className="col-sm-9">
                <h2 className="concert-name">
                    <a>레보엠</a>{/* <a>{title}</a> */}
                </h2>
                <p>서귀포예술의전당</p>{/* <p>{venue}}</p> */}
                <p>2018. 11. 16(금)~17(토))</p>{/* <p>{start_date} ~ {end_date}</p> */}
                <SingleConcertContentBtn/>
            </div>
        )
    }
}

export default SingleConcertContent;