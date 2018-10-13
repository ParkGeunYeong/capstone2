import React, { Component } from 'react';

class HeroAreaBtn extends Component {
    render() {
        return (
            <div className="hero_area_text_content">
                <p className="hero_area_btn"><a href="/">예매하러 가기</a></p>
                <h1>공연 소개</h1>
                <p><i className="fa fa-calendar"></i>2018년 12월 10일 ~ 2018년 12월 20일</p> 
            </div>
        );
    }
}

export default HeroAreaBtn;