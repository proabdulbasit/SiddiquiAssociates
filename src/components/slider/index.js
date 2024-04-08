import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Styles from "./slider.module.scss";
// import "./slider.module.scss"
import "./slider.scss"
import { Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';

const Slider = ({ testimonial }) => {
    return (
        <div className="swiperContainer">
            <Swiper
                modules={[Navigation, EffectFade, Pagination]}
                slidesPerView={1}
                navigation
                effect
                speed={800} 
                loop={true}
                className="swiper"
                pagination={{ clickable: true }}
            >
                {testimonial.map((content, index) => (
                    <SwiperSlide key={index} className="swiperSlide" style={{color:"white"}}>
                        <p>{content.review}</p>
                        <p>{content.name}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Slider;