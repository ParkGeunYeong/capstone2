import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as usersActions from '../../../redux/modules/users';
import * as pagesActions from '../../../redux/modules/paginate';
import * as tradeActions from '../../../redux/modules/ticket';

import ConcertListWrapper from '../../concertlist/ConcertListWrapper';
import SingleConcert from '../../concertlist/SingleConcert';
import SingleConcertImg from '../../concertlist/SingleConcertImg';
import SingleConcertContent from '../../concertlist/SingleConcertContent';
import PaginateBox from '../../concertlist/PaginateBox';

class ConcertApp extends Component {
    componentWillMount() {
        // 서버사이드에서도 데이터 로딩이 작동하기 위해서, 데이터 불러오는 작업을 componentWillMount 에서 호출합니다.
        const { UsersActions, PagesActions, query, data, done, currentPage } = this.props;
        console.log("componentWillMount currentPage : "+currentPage);

        console.log("componentWillMount data : "+data);
    }

    componentDidMount() {
        const { data } = this.props;
        console.log("componentDidMount data : "+data);
    }

    handlePageNumber = (e) => {
        const { PagesActions } = this.props
        const number = e.currentTarget.dataset.number;
        console.log("number: "+number);
        PagesActions.createPage(number);
    }

    handleButtonMore = (e) => {
        const { TradeActions } = this.props;
        const ticket = "org.example.ticket.Ticket#string";
        const newOwner = "org.example.ticket.User#customer01";
        TradeActions.buyTickets(ticket, newOwner);
    }
    render() {
        const { handlePageNumber, handleButtonMore } = this;
        const { data, currentPage } = this.props; // concert list

        console.log("render data: " + data);
        console.log("render page: " + currentPage);
        // console.log(page);

        const indexOfLastTodo = currentPage * 8;
        const indexOfFirstTodo = indexOfLastTodo - 8;
        const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);
        const tojsCurrentTodos = currentTodos;

        const concertList = tojsCurrentTodos.map(
            concert => 
            <SingleConcert key={concert.concertId}>
                <SingleConcertImg/>
                <SingleConcertContent
                onClick={handleButtonMore}
                concertTitle={concert.concertName}
                concertVenue={concert.location}/>
            </SingleConcert>
        );
        //유저 이름 목록을 생성합니다.

        return (
            <ConcertListWrapper>
                {concertList}
                <PaginateBox onClick={handlePageNumber}/>
            </ConcertListWrapper>
        );
    }
}

export default connect(
    (state) => ({
        data: state.users.data,
        currentPage: state.paginate.currentPage,
        ticket: state.ticket.ticket,
        newOwner: state.ticket.newOwner
    }),
    (dispatch) => ({
        UsersActions: bindActionCreators(usersActions, dispatch),
        PagesActions: bindActionCreators(pagesActions, dispatch),
        TradeActions: bindActionCreators(tradeActions, dispatch)
    })
)(ConcertApp);