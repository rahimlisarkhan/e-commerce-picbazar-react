import React from 'react';
import carousel1  from '../../img/carousel1.png'
import  carousel2   from '../../img/carousel2.png'
import carousel3  from '../../img/carousel3.png'
import { BsSearch } from 'react-icons/bs';
import { VideoTag } from 'react-video-tag'
import video from '../../img/backVideo.mp4'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let ProductCarousel = () => {
    
    //carousel setting
    let settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:true,
      };

      //video setting
      const defaults = {
        type : 'video/mp4',
        muted : true,
        autoPlay : true,
        playsInline : true,
        loop : true,
    }
    return (
        <div className='product-carousel'>
              <VideoTag className='bg-video' src={video} {...defaults} />
            <div className='product-carousel__desc'>

                
          
                <h1>Groceries Delivered in 90 Minute</h1>
                <p>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>

                <div className="input-group">
                    <input type='text' name='search' placeholder='Search your products from here'/>
                    <button> <BsSearch/> Search</button>
                </div>
            </div>
          
      
        <Slider  className="product-carousel__info" {...settings}>
            <div>
                <img src={carousel1} alt='Carousel' />
            </div>
            <div>
                <img src={carousel2} alt='Carousel' />
            </div>
            <div>
                <img src={carousel3} alt='Carousel' />
            </div>
            <div>
                 <img src={carousel1} alt='Carousel' />
            </div>
            <div>
                <img src={carousel2} alt='Carousel' />
            </div>
            <div>
                <img src={carousel3} alt='Carousel' />
            </div>
    </Slider>

        </div>
    );
}

export default ProductCarousel;