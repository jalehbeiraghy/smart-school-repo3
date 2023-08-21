import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class CenterMode extends Component {
  render() {
    const settings = {
       className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      arrows:false,
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
          <Image src='/images/4.jpg' width='800' height='600' alt="ceo"/>
          </div>
          <div>
          <Image src='/images/4.jpg' width='800' height='600' alt="ceo"/>
          </div>
          <div>
          <Image src='/images/4.jpg' width='800' height='600' alt="ceo"/>
          </div>
          <div>
          <Image src='/images/4.jpg' width='800' height='600' alt="ceo"/>
          </div>
          <div>
          <Image src='/images/4.jpg' width='800' height='600' alt="ceo"/>
          </div>
          <div>
          <Image src='/images/4.jpg' width='800' height='600' alt="ceo"/>
          </div>
        </Slider>
      </div>
    );
  }
}