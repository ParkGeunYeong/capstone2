import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as pageNumberActions from '../../store/modules/concertlist';

import ConcertListWrapper from '../../components/concertlist/ConcertListWrapper';
import SingleConcert from '../../components/concertlist/SingleConcert';
import SingleConcertImg from '../../components/concertlist/SingleConcertImg';
import SingleConcertContent from '../../components/concertlist/SingleConcertContent';
import PaginateBox from '../../components/concertlist/PaginateBox';

class ConcertApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            concerts: [],
            pageArray : [],
        };
    }

    componentDidMount() {
        fetch('/concert')
          .then(res => res.json())
          .then(concerts => this.setState({ concerts }));
    }

    render() {
        return (
            <ConcertListWrapper>
        {this.state.concerts.map(concerts => <h1>{concerts.title}{concerts.venue}</h1>)}
                <SingleConcert>
                    <SingleConcertImg/>
                    <SingleConcertContent/>
                </SingleConcert>
                <PaginateBox/>
            </ConcertListWrapper>
        );
    }
}

export default ConcertApp;