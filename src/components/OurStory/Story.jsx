import React from 'react'
import story from '/public/image/story1.png'
import icon3 from "/public/icons/Instagram.svg";
import icon7 from "/public/icons/Telegram.svg"
import icon4 from "/public/icons/Pinterest.svg";
import icon5 from "/public/icons/Facebook.svg";
import icon6 from "/public/icons/Twitter.svg";
export const Story = () => {

    return (

        <div className='md:mt-[83px] mt-[62px]'>
            <div className='container'>
                <div className='grid lg:grid-cols-2 border-x border-black-black_header'>
                    <div className=' my-[98px] mx-4 sm:my-[117px] lg:items-center lg"content-center text-center'>
                        <div className='justify-items-center mx-2] '>
                            <h1 className='font-semibold sm:text-[50px] text-[34px] text-black-black_header leading-[120%]'>Our Story</h1>
                            <p className='font-normal sm:text-[28px] text-xl mt-6 italic'>About</p>
                            <h1 className='font-semibold sm:text-[50px] text-[34px] text-black-black_header leading-[120%] mt-6'>Kyiv LuxeBouquets</h1>
                            <p className='font-normal text-lg leading-[140%] max-w-[505px] text-center mt-6'>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                        </div>
                        <div className='mt-16  '>
                            <div className=' justify-between m-auto flex  mt-6 max-w-[368px] w-full'>
                                <div className='border rounded-[100%] border-black-black_header p-3'>
                                <img className='max-w-6   w-full' src={icon3} alt="icon" />
                                </div>
                                <div className='border rounded-[100%] border-black-black_header p-3'>
                                <img className='max-w-6  w-full' src={icon4} alt="icon" /> 
                                </div>
                                <div className='border rounded-[100%] border-black-black_header p-3'>
                                <img className='max-w-6 w-full' src={icon5} alt="icon" />
                                </div>
                                <div className='border rounded-[100%] border-black-black_header p-3'>
                                <img className='max-w-6 w-full' src={icon6} alt="icon" />
                                </div>
                                <div className='border rounded-[100%] border-black-black_header p-3'>
                                <img className='max-w-6 w-full' src={icon7} alt="icon" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div  className=''>
                        <img className='h-full w-full' src={story} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

