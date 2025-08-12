import React from 'react'

const Aboutas = () => {
    return (
        <>
            <div>
                <div className='container'>

                    <div className='border border-solid border-black-black_header border-t-0 '>
                        <div className=' grid lg:grid-cols-2'>
                            <div className='py-10 ml-4  sm:pt-20 sm:ml-20 '>
                                <h1 className='font-semibold text-[34px] leading-[120%] text-black-black_header sticky top-[83px] sm:text-[50px]' >About us</h1>
                            </div>
                            <div className='border-black-black_header lg:border-l'>
                                <div className='border-t lg:border-0 border-black-black_header '>
                                    <div className='mt-10 mx-4  sm:mt-20 sm:mx-20 '>
                                        <p className='font-medium text-xs leading-[120%] text-black-black_header sm:text-sm' >OUR STORY</p>
                                        <h1 className='font-medium text-[26px] leading-[120%] text-black-black_header mt-6 sm:text-[38px] '>Kyiv LuxeBouquets</h1>
                                        <p className='font-normal text-base leading-[140%] text-black-black_header mt-4 '>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
                                    </div>
                                </div>
                                <div className='mt-16 mx-4 sm:mx-20 mb-10 sm:mb-20 group '>
                                    <div className='border border-black-black_header sm:max-w-[175px]  text-center '>
                                        <button className={`transition-all group-hover:scale-110 duration-300   py-[18.5px] font-medium text-sm sm:text-base leading-[100%] text-black-black_header `}>LEARN MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Aboutas