import React from 'react'
import img from '../../assets/image/card_item_cate6.png'
import close from '../../assets/icons/close.svg'
import { Link } from 'react-router-dom'

export const Card = () => {
    return (
        <div className='md:mt-[83px] mt-[62px]'>

            <div className=''>

                <div className='container'>
                    <div className='grid lg:grid-cols-2 border border-black-black_header border-b-0'>
                        <div>

                        </div>

                        <div className=' lg:border-l border-0 border-black-black_header '>
                            <div className='flex justify-between sm:px-10 px-4 top-0 py-7'>
                                <h1>Shopping Cart</h1>
                                <img src={close} alt="" />
                            </div>
                            <div className='sm:px-10 px-4 border-t border-black-black_header'>
                                <div className=' sm:flex    gap-4 py-10'>

                                    <div>
                                        <img className='max-w-40 border border-black-black_header' src={img} alt="img" />
                                    </div>
                                    <div className=' mt-4 justify-between w-full sm:mt-0 flex   '>
                                        <div className='content-around '>
                                            <h1 className='font-medium text-lg leading-[140%] text-black-black_header'>Rosy Delight</h1>
                                            <h1 className='font-normal mt-2 text-base leading-[140%] text-black-black_header'>Quantity (1)</h1>
                                            <h1 className='mt-2 text-lg font-medium leading-[140%] text-black-black_header'>$100</h1>
                                        </div>

                                        <div className='sm:content-around  content-end'>
                                            <h1 className='font-semibold text-base leading-[120%] text-gray-gray_color'>Remove</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' py-10 sm:px-10 px-4   border-t border-black-black_header'>
                                <div className='flex justify-between'>
                                    <h1 className='font-medium text-lg leading-[140%] text-black-black_header'>Subtotal</h1>
                                    <p className='font-medium text-[21px] leading-[120%] text-black-black_header'>$100.00</p>
                                </div>
                            </div>
                            <div className='py-10 sm:px-10 px-4   border-t border-black-black_header'>
                                <div className=' '>
                                    <input className='outline-none text-gray-gray_color font-normal text-base pb-24 leading-[140%] ' type="text" placeholder='Gift Message' />
                                </div>
                            </div>
                            <div className='py-10 sm:px-10 px-4   border-t border-black-black_header'>
                                <div className='text-center'>
                                    <h1 className='font-normal text-sm leading-[120%] text-black-black_header '>Shipping & taxes calculated at checkout <br /> Free standard shipping within Kyiv</h1>
                                </div>
                            </div>
                            <div className=''>
                                <div className='bg-black-black_header text-center'>
                                    <Link to={"/Contatinfo"}>  <button className='text-white-white_color my-[19px] font-medium text-base leading-[120%]'>CHECK OUT</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
