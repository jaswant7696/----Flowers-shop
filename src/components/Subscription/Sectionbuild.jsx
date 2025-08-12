import React, { useState } from 'react'
import image from '../../assets/image/service_Flower.png'
import section from '../json/sectionbuild.json'
export const Sectionbuild = () => {
    const [cont, setCont] = useState(1);

    return (
        <div>
            <div className='container'>
                <div className='lg:grid lg:grid-cols-2 grid-col-reverse border border-b-0 border-black-black_header flex flex-col-reverse'>
                    <div >
                        <div className='sm:mx-10 mx-4 sm:mt-20'>
                            <p className='font-medium text-sm text-black-black_header leading-[120%]'>Build Your Subscription</p>
                            <div className='mt-6'>
                                <h1 className='font-medium text-[38px] text-black-black_header leading-[120%]'>Selecting a Plan</h1>
                                <p className='mt-4 text-base font-normal leading-[120%] text-black-black_header'>Enjoy free shipping on every order and save up to 30%. <br />
                                    Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard. You're in complete control of your flower delivery experience.</p>
                            </div>
                            <div className='mt-6'>
                                {
                                    section.map((items, index) => (
                                        <div key={index} className='mt-4' >
                                            <div className='md:flex border border-gray-400 '>
                                                <div className=' border-b border-gray-lightgray_color sm:border-b-0'>
                                                    <img className='sm:border-r h-full border-b-0 w-full border-gray-400 ' src={`src/assets/image/${items.image}`} alt="" />
                                                </div>
                                                <div className='ml-4'>
                                                    <h1 className=' mt-4  text-lg font-medium leading-[140%] text-black-black_header'>{items.head}</h1>
                                                    <ul className='mt-4 mb-4 '>
                                                        {
                                                            items.data.map((item, index) => (
                                                                <li key={index} className='text-base font-normal flex items-center text-black-black_header leading-[140%] gap-1'><span className='inline-block w-1.5 h-1.5 bg-black-black_header rounded-[100px]'></span> {item}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='bg-black-black_header '>
                                                <button className='text-white-white_color font-medium text-base leading-[120%] my-[18px] w-full  '> {items.button}</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <div className=' sm:m-10 mt-10 mx-4  border-gray-400 border-t'>
                            <div className='mt-10'>
                                <h1 className='font-normal text-[28px] text-black-black_header leading-[120%]' >How often do you want flowers delivered ?</h1>
                                <p className='font-normal text-base text-black-black_header leading-[140%] mt-4'>Select the delivery frequency</p>
                                <div className='gap-4 sm:flex w-full  mt-6'>
                                    <button className='font-medium text-base w-full leading-[120%] border border-black-black_header max-w-[202px]  py-[18px]'> Monthly</button>
                                    <button className='font-medium text-base w-full mt-4 sm:mt-0 leading-[120%] border max-w-[202px]  border-black-black_header py-[18px] items-center'>Bi-Weekly</button>
                                    <button className='font-medium text-base w-full mt-4 sm:mt-0 leading-[120%] border border-black-black_header max-w-[202px] py-[18px]  '>Weekly</button>
                                </div>
                            </div>
                        </div>
                        <div className='sm:m-10 mt-10  mx-4 border-gray-400 border-t'>
                            <div className='mt-10'>
                                <h1 className='font-normal text-[28px] text-black-black_header leading-[120%]'>How many deliveries would you like ?</h1>
                                <p className='font-normal text-base text-black-black_header leading-[140%] mt-4 '>Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need </p>
                            </div>
                            <div className="flex justify-between max-w-[343px] items-center border border-black-black_header  sm:max-w-[146px] w-full mt-6" >
                                <button className="px-3 py-2" onClick={() => setCont(cont > 1 ? cont - 1 : 1)}>-</button>
                                <div className=" max-w-[255px] w-full px-4 py-2 border-x border-black-black_header  text-center">
                                    <p  >{cont}</p>
                                </div>

                                <button className='px-3 py-2 ' onClick={() => setCont(cont < 10 ? cont + 1 : 10)}>+</button>
                            </div>
                        </div>
                        <div className='border-t sm:m-10 my-10  mx-4 border-gray-400 '>
                            <button className=' text-white-white_color bg-black-black_header w-full mt-10 py-[18px] font-medium text-base leading-[120%]'>CHECKOUT</button>
                        </div>

                    </div>
                    <div className='sm:border-l  sm:border-r border-black-black_header ' >
                        <img className='sticky top-[83px] border-b sm:border-b-0  w-full mb-10' src={image} alt="" />
                    </div>
                </div>

            </div>
       
        </div>
    )
}

