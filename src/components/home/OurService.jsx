import React from 'react'
import image from '/public/image/service_Flower.png'
const OurService = () => {
    return (
        <div>
            <div className='container'>
               
                <div className='border border-t-0 border-black-black_header sm:justify-center pl-4  sm:text-center'>
                    <h1 className='font-semibold text-[34px] sm:text-[50px] leading-[120%] py-10 sm:py-20'>Our Service</h1>
                </div>
                <div className='border border-t-0 border-black-black_header'>
                    <div className=' lg:grid grid-cols-2'>
                        <div className='w-full'>
                            <img className='w-full' src={image} alt="" />
                        </div>
                        <div className='lg:border-l border-black-black_header justify-center items-center flex px-4 py-10 sm:py-20'>
                            <div className=' w-[560px] text-center '>
                                <div>
                                    <p className='font-medium text-xs sm:text-sm leading-[120%] text-black-black_header '>SERVICE</p>
                                    <h1 className='font-semibold text-[34px] sm:text-[50px] leading-[120%] text-black-black_header mt-6'>Flower Subcriptions</h1>
                                    <p className='font-medium text-base sm:text-lg leading-[140%] text-black-black_header mt-4'>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                                </div>
                                <div className='mt-16 group sm:max-w-[100%] w-full '>
                                        <button className='transition-all group-hover:scale-110 duration-300 border  sm:max-w-[180px] w-full border-black-black_header font-medium text-sm sm:text-base leading-[120%] text-black-black_header px-6 py-[18.5px]'>Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          
        </div>
    )
}

export default OurService