import React, { useRef } from 'react'
import Google from "../../assets/image/GoogleLogo.png";
import RightArrow from "../../assets/icons/RightArrow.svg"
import LeftArrow from "../../assets/icons/LeftArrow.svg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Content = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const reviews = [
        {
            review: "“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”",
            description: "- Ronald Richards"
        },
        {
            review: "“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”",
            description: "- Ronald Richards"
        },
        {
            review: "“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”",
            description: "- Ronald Richards"
        },
        {
            review: "“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”",
            description: "- Ronald Richards"
        },
    ]
    return (
        <>
        <div className='container'>

       
            <div className="border-l border-r border-black-black_header ">
                <div className= ' sm:pb-20 mx-7 sm:mx-20  group'>
                    <div className="flex pt-10 sm:pt-20 items-center flex-col gap-4">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center flex-col gap-2">
                                <img className='max-w-[77px]' src={Google} alt="Google" />
                                <p className="text-sm leading-[120%]">Reviews</p>
                            </div>
                            <h1 className='text-[34px] sm:text-[50px] leading-[120%]'>Our Clients say</h1>
                        </div>
                    </div>
                    <div className=' flex '>
                        <button className='sm:block hidden'  ref={prevRef}><img className='max-w-8 ' src={LeftArrow} alt="" /></button>
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            loop={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            className="mySwiper"
                        >
                            {
                                reviews?.map((item, index) => (
                                    <SwiperSlide key={index }>
                                        <div className=' justify-center text-center items-center mx-6'>
                                            <h2 className='font-normal text-[22px] sm:text-[28px] leading-[120%] italic text-black-black_header mt-4 '>{item.review}</h2>
                                            <p className='font-medium text-base leading-[120%] text-black-black_header mb-8 mt-4'>{item.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>

                        <button className='sm:block hidden' ref={nextRef}><img className='max-w-8' src={RightArrow} alt="" /></button>
                    </div>

                    <div className=' mt-16 sm:pb-20 pb-10    text-center'>
                        <button className={`border border-black-black_header transition-all group-hover:scale-105 duration-300 px-6 py-[18.5px] w-full sm:max-w-[163px] text-black-black_header text-sm sm:text-base font-medium leading-[19.2px] hover:bg-slate-200 hover:text-black-black_header `}>READ REVIEWS </button>
                    </div>
                </div >
            </div>
            </div>
        </>
    )
}

export default Content