import React, { Component } from "react";
import Slider from "react-slick";

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots:false,
      infinite: true,
      slidesToShow: 20,
      slidesToScroll: 20,
      vertical: true,
      verticalSwiping: true,
      arrows:false,
      
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div className='h-full'>
        
        <Slider {...settings} className="h-full flex justify-center  items-center">
          <div >
            <h3>lesson1</h3>
          </div>
          <div>
            <h3>lesson2</h3>
          </div>
          <div>
            <h3>lesson3</h3>
          </div>
          <div>
            <h3>lesson4</h3>
          </div>
          <div>
            <h3>lesson5</h3>
          </div>
          <div>
            <h3>lesson6</h3>
          </div>
          <div>
            <h3>lesson7</h3>
          </div>
          <div>
            <h3>lesson8</h3>
          </div>
          <div>
            <h3>lesson9</h3>
          </div>
          <div>
            <h3>lesson10</h3>
          </div>
          <div >
            <h3>lesson1</h3>
          </div>
          <div>
            <h3>lesson2</h3>
          </div>
          <div>
            <h3>lesson3</h3>
          </div>
          <div>
            <h3>lesson4</h3>
          </div>
          <div>
            <h3>lesson5</h3>
          </div>
          <div>
            <h3>lesson6</h3>
          </div>
          <div>
            <h3>lesson7</h3>
          </div>
          <div>
            <h3>lesson8</h3>
          </div>
          <div>
            <h3>lesson9</h3>
          </div>
          <div>
            <h3>lesson10</h3>
          </div>


          <div >
            <h3>lesson1</h3>
          </div>
          <div>
            <h3>lesson2</h3>
          </div>
          <div>
            <h3>lesson3</h3>
          </div>
          <div>
            <h3>lesson4</h3>
          </div>
          <div>
            <h3>lesson5</h3>
          </div>
          <div>
            <h3>lesson6</h3>
          </div>
          <div>
            <h3>lesson7</h3>
          </div>
          <div>
            <h3>lesson8</h3>
          </div>
          <div>
            <h3>lesson9</h3>
          </div>
          <div>
            <h3>lesson10</h3>
          </div>
         
          
        </Slider>
      </div>
    );
  }
}