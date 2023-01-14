import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image_1 from "../assets/image_1.jpeg";
import image_2 from "../assets/image_2.jpeg";
import image_3 from "../assets/image_3.jpeg";
import image_4 from "../assets/image_4.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

function Crousal() {
  return (
    <>
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper h-[450px]"
        >
            <SwiperSlide>
                <img  
                    src={image_1}
                    className="img object-cover"
                />
                <div className='imgcontainer space-y-2'>
                    <h2 className='font-sans font-semibold'>-- New Items </h2>
                    <h2 className='font-sans font-bold text-2xl'>Summer Sale</h2>
                    <h2 className='font-medium text-lg underline'>Discover more</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={image_2}
                    className="img"
                />
                <div className='imgcontainer space-y-2'>
                    <h2 className='font-sans font-semibold'>-- Featured Items -- </h2>
                    <h2 className='font-sans font-bold text-2xl'>Winter Season Collection</h2>
                    <h2 className='font-medium text-lg underline'>Discover more</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={image_3}
                    className="img"
                    />
                <div className='imgcontainer2 space-y-2'>
                    <h2 className='font-sans font-semibold'>-- New Items </h2>
                    <h2 className='font-sans font-bold text-2xl'>Summer Sale</h2>
                    <h2 className='font-medium text-lg underline'>Discover more</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={image_4}
                    className="img"
                    />
                <div className='imgcontainer2 space-y-2'>
                    <h2 className='font-sans font-semibold'>-- New Items </h2>
                    <h2 className='font-sans font-bold text-2xl'>Summer Sale</h2>
                    <h2 className='font-medium text-lg underline'>Discover more</h2>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Crousal