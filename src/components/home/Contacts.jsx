import React from 'react'
import image1 from "../../assets/image/Right_colum.png";
import icon1 from "../../assets/icons/call.svg";
import icon2 from "../../assets/icons/pin_drop.svg";
import icon3 from "../../assets/icons/Instagram.svg";
import icon4 from "../../assets/icons/Pinterest.svg";
import icon5 from "../../assets/icons/Facebook.svg";
import icon6 from "../../assets/icons/Twitter.svg";
import icon7 from "../../assets/icons/Telegram.svg";
const Contacts = () => {
    return (
        <div>
            <div className='container'>
                <div className='border border-solid  border-t-0 border-black-black_header  flex flex-col-reverse lg:grid   lg:grid-cols-2'>
                    <div className='grid'>
                        <div className='grid '>
                            <div className='grid lg:justify-center sm:mx-20 mx-4 border-black-black_header max-h-[181px] mt-10 sm:mt-20 mb-[92px]   '>
                                <div className='' >
                                    <h1 className='font-semibold text-[34px] sm:text-[50px]  text-black-black_header'>To Contact Us</h1>
                                </div>
                                <div className='mt-6'>
                                    <p className=' text-lg font-medium leading-[140%] '>We will call you back</p>
                                    <div className='  grid sm:grid-cols-2 mt-4 group gap-4'>
                                        <div className='border'>
                                            <input className='outline-none  pl-4  py-[18.5px] text-gray-gray_color text-sm font-medium leading-[120%]' type="mobile " placeholder='+380 XX XXX XX XX' id='phone ' />
                                        </div>
                                        <div>
                                            <div className='w-full'>
                                                <button className={`transition-all w-full group-hover:scale-105 duration-300  py-[18.5px] bg-black-black_header text-white-white_color text-sm sm:text-base font-medium leading-[120%] hover:bg-slate-200 hover:text-black-black_header `}>BOOK A CALL </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-t border-black-black_header  grid sm:grid-cols-2 '>
                            <div className=''>
                                <div className='border-b border-black-black_header'>
                                    <h1 className='font-medium ml-4 sm;ml-0 text-[38px] leading-[45.6px] text-black-black_header sm:text-center py-4'>Phone</h1>
                                </div>
                                <div className='content-center my-10'>
                                    <div className='ml-4 sm;ml-0'>
                                        <div className='flex gap-1 sm:justify-center items-center '>
                                            <img src={icon1} alt="icon" />
                                            <button className='font-semibold text-base leading-[19.2px] text-black-black_header'>+380980099777</button>
                                        </div>
                                        <div className='flex gap-1 sm:justify-center items-center mt-6'>
                                            <img src={icon1} alt="icon" />
                                            <button className='font-semibold text-base leading-[19.2px] text-black-black_header'>+380980099777</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='sm:border-l border-black-black_header'>
                                <div>
                                    <div className=' border-black-black_header border-b'>
                                        <h1 className='font-medium pl-4 sm;ml-0 text-[38px] leading-[45.6px] text-black-black_header sm:text-center border-t border-black-black_header sm:border-t-0  py-4'>Address</h1>
                                    </div>
                                    <div className=' sm:text-center sm:justify-center h-full'>
                                        <div className='sm:content-center my-10'>
                                            <div className='pl-4 sm;ml-0' >
                                                <div className=' sm:justify-center sm:items-center'>
                                                    <h1 className='font-medium text-sm leading-[16.8px] text-black-black_header ' >opening hours: 8 to 11 p.m.</h1>
                                                </div>
                                                <div className='flex items-center sm:justify-center pt-[22px] gap-1  '>
                                                    <img src={icon2} alt="icon" />
                                                    <h1 className='font-semibold text-base leading-[19.2px] '>15/4 Khreshchatyk Street, Kyiv </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:border-l border-b lg:border-b-0 border-solid border-black-black_header   '>
                        <img className='w-full' src={image1} alt="img" />
                        <div className='sm:grid grid-cols-2 ml-4 sm:ml-0'>
                            <div className=''>
                                <h1 className='font-medium text-[38px] leading-[45.6px] text-black-black_header py-4 sm:text-center '>Follow us</h1>
                            </div>
                            <div className='sm:border-l gap-8 sm:justify-center pt-2 pb-4 sm:pb-0 border-black-black_header flex'>
                                <img className=' max-w-6' src={icon3} alt="icon" />
                                <img className='max-w-6' src={icon4} alt="icon" />
                                <img className='max-w-6' src={icon5} alt="icon" />
                                <img className='max-w-6' src={icon6} alt="icon" />
                                <img className='max-w-6' src={icon7} alt="icon" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts