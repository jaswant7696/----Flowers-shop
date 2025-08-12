import React, { useState } from 'react'
import vector from '/public/icons/Vector12.svg'
import img from '/public/image/card_item.png'
import lock from '/public/icons/lock.svg'
import check from '/public/icons/check.svg'
import editsquare from '/public/icons/editsquare.svg'
import Commoninput from '../../components/ui/input'
import calendar from '/public/icons/calendar.svg'
import apple from '/public/icons/Apple.svg'
import google from '/public/icons/Google.svg'
import vector1 from '/public/icons/Vector.svg'
import cheveron from '/public/icons/Cheveron25.svg'
import arrodrop from '/public/icons/arrow_drop_down.svg'
export const Sectioncheckout = () => {
    const [button, setButton] = useState(false)
    const [stap, setStap] = useState(1)
    return (
        <div className='md:mt-[83px] mt-[62px] '>
            <div className='container'>
                <div className='border border-b-0 border-black-black_header'>
                    <div className='lg:grid lg:grid-cols-2 flex flex-col-reverse'>

                        <div className='sm:px-20 px-4 '>

                            <>
                                <div >
                                    <div className='flex gap-2'>
                                        <h1 className={`font-medium text-sm  leading-[120%] ${stap === 1 ? "text-black-black_header" : "text-gray-gray_color"}`}>INFORMATION</h1>
                                        <img src={vector} alt="vector" />
                                    </div>
                                    <div className='flex gap-2'>
                                        <h1 className={`font-medium text-sm  leading-[120%] ${stap === 2 ? "text-black-black_header" : "text-gray-gray_color"}`}>SHIPPING</h1>
                                        <img src={vector} alt="vector" />
                                    </div>
                                    <div className='flex gap-2'>
                                        <h1 className={`font-medium text-sm  leading-[120%] ${stap === 3 ? "text-black-black_header" : "text-gray-gray_color"}`}>PAYMENT</h1>
                                        <img src={vector} alt="vector" />
                                    </div>
                                </div>
                            </>
                            {stap === 1 && (<>
                                <>
                                    <div className=' '>
                                        <div className='sm:mt-10  mt-8 '>
                                            <h1 className='font-normal text-base text-black-black_header py-10 pl-10 bg-gray-lightgray_color'>Already have an account? <span className='border-b-2  border-black-black_header'>Log in</span>  for faster checkout</h1>
                                            <div className='border-b border-gray-lightgray_color pb-6'>
                                                <h1 className='text-lg font-medium text-black-black_header leading-[140%] mt-6'>1 Contact information</h1>
                                                <div className='mt-4 sm:max-w-[328px] md:max-w-[430px] lg:max-w-[560px]'>
                                                    <div className='border border-gray-lightgray_color mt-3'>
                                                        <Commoninput placeholder="Your Name" />
                                                    </div>
                                                    <div className='border border-gray-lightgray_color mt-3'>
                                                        <Commoninput placeholder="Your Email" />
                                                    </div>
                                                    <div className='border border-gray-lightgray_color mt-3'>
                                                        <Commoninput placeholder="Your Phone number *" />
                                                    </div>

                                                </div>
                                                <div className='bg-black-black_header text-center mt-4'>
                                                    <button onClick={() => setStap(2)} className='text-white-white_color text-base font-medium leading-[120%]  py-[18px]'>CONTINU TO SHIPPING </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-b border-gray-lightgray_color mt-10 pb-6' >
                                            <p className='font-medium text-lg text-gray-lightgray_color leading-[140%]'>2 Shipping details</p>
                                        </div>
                                        <div className='border-b border-gray-lightgray_color my-10'>
                                            <p className='font-medium text-lg text-gray-lightgray_color mb-6 leading-[140%]'>3 Payment</p>
                                        </div>
                                    </div>
                                </>
                            </>)}
                            {stap === 2 && (<>
                                <>
                                    <div className='mt-10  '>
                                        <div className='flex justify-between border-b pb-6  border-gray-lightgray_color '>
                                            <div onClick={() => setStap(1)} className='flex gap-1'>
                                                <img src={check} alt="" />
                                                <h1 className='font-medium text-lg leading-[140%] text-black-black_header'>Contact information</h1>
                                            </div>
                                            <div>
                                                <img className='text-end' src={editsquare} alt="" />
                                            </div>
                                        </div>
                                        <div className='mt-10 border-b border-gray-lightgray_color pb-6'>
                                            <h1 className='font-medium text-lg leading-[140%] text-gray-darkgray_color '>2 Shipping details</h1>
                                            <div className='mt-4'>
                                                <div>
                                                    <div className='max-w-[328px] '>
                                                        <div className='border border-gray-lightgray_color mt-3'>
                                                            <Commoninput className="" placeholder="Recipients Name" />
                                                        </div>
                                                        <div className='border border-gray-lightgray_color mt-3'>
                                                            <Commoninput placeholder="Recipients Phone number *" />
                                                        </div>


                                                    </div>
                                                    <div className=' flex border border-gray-lightgray_color mt-3 pr-4 '>
                                                        <Commoninput placeholder="Data of Delivery" />
                                                        <img src={calendar} alt="" />
                                                    </div>
                                                    <div className='border border-gray-lightgray_color mt-3 pr-4 flex '>
                                                        <Commoninput placeholder="Delivery Time" />
                                                        <img src={arrodrop} alt="" />
                                                    </div>
                                                    <div className=' sm:flex  gap-3 '>
                                                        <div className='border border-gray-lightgray_color w-full mt-3'>
                                                            <Commoninput placeholder="Street" />
                                                        </div>
                                                        <div className='border border-gray-lightgray_color w-full mt-3'>
                                                            <Commoninput placeholder="Apartment Number" />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='flex mt-3 gap-3'>
                                                    <h1 className='border border-black-black_header w-6 bg-gray-lightgray_color '></h1>
                                                    <h1 className='text-sm font-normal leading-[120%] text-black-black_header'>I don't know the address, please call the recipient.</h1>
                                                </div>
                                                <div className='bg-black-black_header text-center mt-4'>
                                                    <button onClick={() => setStap(3)} className='text-white-white_color text-base font-medium leading-[120%]  py-[18px]'>CONTINU TO PAYMENT </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-b border-gray-lightgray_color mt-10 mb-6'>
                                            <p className='font-medium text-lg text-gray-lightgray_color mb-6 leading-[140%]'>3 Payment</p>
                                        </div>
                                    </div>
                                </>
                            </>)}
                            {stap === 3 && (<>
                                <>
                                    <div className=''>
                                        <div className='mt-10'>
                                            <div className='flex justify-between border-b pb-6  border-gray-lightgray_color '>
                                                <div onClick={() => setStap(1)} className='flex gap-1'>
                                                    <img src={check} alt="" />
                                                    <h1 className='font-medium text-lg leading-[140%] text-black-black_header'>Contact information</h1>
                                                </div>
                                                <div>
                                                    <img className='text-end' src={editsquare} alt="" />
                                                </div>
                                            </div>
                                            <div className='flex justify-between border-b pb-6 mt-10  border-gray-lightgray_color '>
                                                <div onClick={() => setStap(2)} className='flex gap-1'>
                                                    <img src={check} alt="" />
                                                    <h1 className='font-medium text-lg leading-[140%] text-black-black_header'>Shipping details</h1>
                                                </div>
                                                <div>
                                                    <img className='text-end' src={editsquare} alt="" />
                                                </div>
                                            </div>

                                            <div className='mt-10 border-b pb-6 border-gray-lightgray_color '>
                                                <h1 className='font-medium text-lg leading-[140%] text-gray-darkgray_color'>3 Payment</h1>
                                                <div className='mt-4'>
                                                    <h1 className='font-medium text-base leading-[120%] text-black-black_header'>Pay by card. Your payment is secure.</h1>
                                                    <div className='border border-gray-lightgray_color w-full mt-3'>
                                                        <Commoninput placeholder="Card Number" />
                                                    </div>

                                                    <div className='sm:flex sm:mt-0 mt-3 gap-3 w-full'>
                                                        <div className='border border-gray-lightgray_color w-full mt-3'>
                                                            <Commoninput placeholder="MM / YY" />
                                                        </div>
                                                        <div className='border border-gray-lightgray_color w-full mt-3'>
                                                            <Commoninput placeholder="CVV Code" />
                                                        </div>

                                                    </div>
                                                    <div className='bg-black-black_header text-center mt-4'>
                                                        <button className='text-white-white_color sm:text-base text-sm font-medium leading-[120%]  py-[18px]'>MAKE A PURCHASE </button>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <h1 className=' font-medium text-base leading-[120%] text-black-black_header'>Or pay using:</h1>
                                                        <div className='sm:flex gap-3 mt-4'>
                                                            <div className='border border-black-black_header items-center text-center flex  w-full'>
                                                                <button className='font-medium sm:text-base text-sm leading-[120%] text-black-black_header py-[19px] w-full flex items-center gap-2 justify-center'><img src={apple} alt="" /> <span>APPLE PAY</span> </button>
                                                            </div>
                                                            <div>
                                                            </div>
                                                            <button className='border border-black-black_header font-medium sm:text-base text-sm leading-[120%] sm:mt-0 mt-3 text-black-black_header py-[19px] w-full flex gap-2 items-center justify-center'><img src={google} alt="" /> <span>GOOGLE PAY</span> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </>)
                            }
                        </div>
                        <>
                            <div className='lg:border-l border-0 border-black-black_header '>
                                <div className={` sm:px-20 pt-10 px-4 bg-gray-extralight_color h-full  border-b lg:border-0 border-black-black_header ${button ? "" : ""}`}>
                                    <div onClick={() => setButton(!button)} className='lg:hidden flex justify-between '>
                                        <div className=' items-center flex gap-2'>
                                            <img src={vector1} alt="" />
                                            <p>Show order summary</p>
                                            <img className={`transition-all duration-300 ${button ? "rotate-180" : "rotate-0"}`} src={cheveron} alt="" />
                                        </div>
                                        <div>
                                            <h1 className={`font-medium sm:text-[21px] text-lg transition-all duration-500 ${!button ? "opacity-100" : "opacity-0"}`}>$100</h1>
                                        </div>
                                    </div>


                                    <p className='font-medium text-sm text-black-black_header hidden lg:block
                                     leading-[120%]'>ORDER SUMMARY</p>
                                    <div className={`mt-10   transition-all duration-300 overflow-hidden  ${button ? "max-h-[2000px]" : "max-h-0 py-0 lg:max-h-full"}   `}>
                                        <div className='sm:flex gap-4 border-b border-gray-lightgray_color pb-6' >
                                            <div className='border border-black-black_header max-w-[162px]'>
                                                <img src={img} alt="" />
                                            </div>
                                            <div className='flex  items-center justify-between max-w-[384px] mt-4 sm:mt-0 w-full '>
                                                <div>
                                                    <h1 className='font-medium text-lg leading-[140%] text-black-black_header'>Snowfall</h1>
                                                    <p className='font-normal sm:text-base text-sm leading-[140%] text-black-black_header '>Quantity (1)</p>
                                                </div>
                                                <div>
                                                    <p className='font-medium text-lg leading-[140%] text-black-black_header'>$100</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-6 border-b border-gray-lightgray_color pb-6'>
                                            <h1 className='font-normal text-base leading-[140%] text-black-black_header'>If you have our gift card, enter the code to get discounts</h1>
                                            <div className=' sm:flex gap-4 mt-4'>
                                                <div className='border border-gray-lightgray_color bg-white-white_color   w-full'>
                                                    <input className='outline-none py-[19px] pl-4 text-sm font-medium leading-[120%]  text-gray-gray_color' type="text" placeholder='Gift card' />
                                                </div>
                                                <div className='bg-black-black_header w-full text-center mt-4 sm:mt-0'>
                                                    <button className='text-white-white_color py-[19px] text-sm sm:text-base  font-medium leading-[120%]'>APPLY</button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-6 border-b border-gray-lightgray_color pb-6'>
                                            <div className='flex justify-between'>
                                                <h1 className='text-base font-normal leading-[140%] text-black-black_header'>Subtotal</h1>
                                                <h1 className='text-base font-normal leading-[140%] text-black-black_header'>$100.00</h1>
                                            </div>
                                            <div className='flex justify-between mt-6'>
                                                <h1 className='text-base font-normal leading-[140%] text-black-black_header'>Shipping</h1>
                                                <h1 className='text-base font-normal leading-[140%] text-black-black_header'>Calculated at next step</h1>
                                            </div>
                                        </div>
                                        <div className='mt-6'>
                                            <div className='flex justify-between'>
                                                <h1 className='font-medium text-lg leading-[140%]'>Total</h1>
                                                <h1 className='font-medium text-lg sm:text-[21px] leading-[120%]'>$100.00</h1>
                                            </div>
                                            <div className={`flex justify-center items-end gap-1 mt-[58px] ${button ? "pb-10" : " lg:pb-0"} `}>
                                                <h1 className='text-sm font-normal leading-[120%]'>Secure Checkout</h1>
                                                <img src={lock} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    </div>
                </div>
            </div>
        </div>
    )
}
