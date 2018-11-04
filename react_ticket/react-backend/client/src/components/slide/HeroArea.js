import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel'

import 'owl.carousel/dist/assets/owl.carousel.css';
import img from '../../img/index_6_hero_area_bg_1.jpg';

const createCarouselItem = (index, options = {}) => (
    <div key={index} className="hero_area_item">
        <img src={img} alt="temp"/>
        <div className="hero_area_text">
            <div className="hero_area_table">
                <div className="hero_area_table_cell">
                    <div className="hero_area_text_content">
                        <p className="hero_area_btn"><a href="/">예매하러 가기</a></p>
                        <h1>공연 소개</h1>
                        <p><i className="fa fa-calendar"></i>2018년 12월 10일 ~ 2018년 12월 20일</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
)
class HeroArea extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            slides: [
                createCarouselItem(0),
                createCarouselItem(1),
                createCarouselItem(2)
            ]
        }
    }
    render() {
        return (
            <section className="hero_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
                                <OwlCarousel 
                                    className="hero_area_list hero_effect"
                                    items = {1}
                                    margin = {0}
                                    autoplay
                                    nav
                                    dots={false}
                                    loop
                                    navText={["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"]}>
                                    { this.state.slides }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default HeroArea;