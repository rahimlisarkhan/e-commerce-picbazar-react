import React from 'react';
import carousel1  from '../../img/carousel1.png'
import  carousel2   from '../../img/carousel2.png'
import carousel3  from '../../img/carousel3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let ProductCarousel = () => {
    
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2
      };
    return (
        <div className='product-carousel'>
            
            <div className='product-carousel__desc'>

                <h1>Groceries Delivered in 90 Minute</h1>
                <p>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
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