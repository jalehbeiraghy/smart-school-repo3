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
        
        <Slider {...settings} className="h-full p-5 gap-2 ">
        <div className=' p-[5%] bg-yellow-300 rounded-lg font-semibold text-white'>Biology</div>
          <div className=' p-[5%] bg-pink-300 rounded-lg font-semibold text-white'>Chimistry</div>
          <div className=' p-[5%] bg-blue-300 rounded-lg font-semibold text-white'>Math</div>
          <div className=' p-[5%] bg-gray-300 rounded-lg font-semibold text-white'>Physices</div>
          <div className=' p-[5%] bg-gray-500 rounded-lg font-semibold text-white'>Art</div>
          <div className=' p-[5%] bg-yellow-300 rounded-lg font-semibold text-white'>Biology</div>
          <div className=' p-[5%] bg-pink-300 rounded-lg font-semibold text-white'>Chimistry</div>
          <div className=' p-[5%] bg-blue-300 rounded-lg font-semibold text-white'>Math</div>
          <div className=' p-[5%] bg-yellow-300 rounded-lg font-semibold text-white'>Biology</div>
          <div className=' p-[5%] bg-pink-300 rounded-lg font-semibold text-white'>Chimistry</div>
          <div className=' p-[5%] bg-blue-300 rounded-lg font-semibold text-white'>Math</div>
          <div className=' p-[5%] bg-gray-300 rounded-lg font-semibold text-white'>Physices</div>
          <div className=' p-[5%] bg-gray-500 rounded-lg font-semibold text-white'>Art</div>
          <div className=' p-[5%] bg-yellow-300 rounded-lg font-semibold text-white'>Biology</div>
          <div className=' p-[5%] bg-pink-300 rounded-lg font-semibold text-white'>Chimistry</div>
          <div className=' p-[5%] bg-blue-300 rounded-lg font-semibold text-white'>Math</div>
          <div className=' p-[5%] bg-yellow-300 rounded-lg font-semibold text-white'>Biology</div>
          <div className=' p-[5%] bg-pink-300 rounded-lg font-semibold text-white'>Chimistry</div>
          <div className=' p-[5%] bg-blue-300 rounded-lg font-semibold text-white'>Math</div>
          <div className=' p-[5%] bg-gray-300 rounded-lg font-semibold text-white'>Physices</div>
          <div className=' p-[5%] bg-gray-500 rounded-lg font-semibold text-white'>Art</div>
          <div className=' p-[5%] bg-yellow-300 rounded-lg font-semibold text-white'>Biology</div>
          <div className=' p-[5%] bg-pink-300 rounded-lg font-semibold text-white'>Chimistry</div>
          <div className=' p-[5%] bg-blue-300 rounded-lg font-semibold text-white'>Math</div>
          
        </Slider>
      </div>
    );
  }
}