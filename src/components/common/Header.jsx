import React, { useState } from 'react'
import shop from '/public/icons/shop2.svg'
import menu1 from '/public/icons/Menu.svg'
import cross from '/public/icons/cross-23.svg'
import { Link } from 'react-router-dom'
import { useBlur } from '../../BlurProvider'


import img from '/image/card_item_cate6.png'
import close from '/public/icons/close.svg'





export const Header = () => {
    const [menu, setMenu] = useState(false)
    const [shop1, setShop1] = useState(false)
    const { setIsBlur } = useBlur();
    const [card, setCard] = useState(true)
    const [remove, setRemove] = useState(false)

    const [slide, SetSlide] = useState(false);




    return (
        <>

            <div className='fixed top-0 left-0 right-0 w-full bg-white-white_color  z-10'>
                <div className='container relative ' >
                    <>

                        <div className='  flex justify-between bg-w  md:border border-solid border-black-black_header ' >

                            <div className=' hidden md:grid  grid-cols-2   ' >
                                <Link to={"/"}> <p className=' text-base font-medium  leading-[19.2px] text-black-black_header text-gray-dark py-[32px] justify-center items-center flex border-r-[1px] border-solid border-black-black_header px-[70px] ' >Shop</p></Link>
                                <p className='text-base font-medium leading-[19.2px] text-black-black_header text-gray-dark py-[32px] justify-center items-center flex px-[58px]  border-r-[1px] border-solid border-black-black_header '>Contact</p>
                            </div>


                            <div >
                                <div className='hidden md:grid  grid-cols-2 '>
                                    <Link to={"sing"}>  <p className='text-base font-medium leading-[19.2px] text-black-black_header text-gray-dark py-[32px] px-[65px] justify-center items-center flex  border-l-[1px] border-solid border-black-black_header'> Sign in</p></Link>


                                    <button> <p onClick={() => setCard(!card)} className={` text-base px-[73px] font-medium leading-[19.2px] text-black-black_header text-gray-dark py-[32px] justify-center items-center flex  border-l-[1px] border-solid border-black-black_header `}>Cart</p></button>
                                </div>

                            </div>


                        </div>


                        <div className='md:hidden overflow-auto  flex relative justify-between border border-black-black_header'>
                            <div className="relative border-r border-black-black_header py-4 px-4">
                              
                                <button onClick={() => setMenu(!menu)}>
                                    <img
                                        className={`${menu ? "hidden" : "block"}`}
                                        src={menu1}
                                        alt="menu"
                                    />
                                    <img
                                        className={`max-w-6 w-full ${menu ? "block" : "hidden"}`}
                                        src={cross}
                                        alt="close"
                                    />
                                </button>

                               
                                <div
                                    className={`fixed top-0 border-x border-t border-black-black_header left-0 h-full z-50 md:hidden transition-all duration-300 ease-out
                                   ${menu ? "w-[320px] opacity-100" : "w-0 opacity-0 overflow-hidden"}`}
                                >
                                    <div className="bg-white-white_color h-full flex flex-col  shadow-lg">
                                      
                                        <button
                                            className="border-b border-black-black_header p-[18.5px]"
                                            onClick={() => setMenu(false)}
                                        >
                                            <img className="max-w-6 w-full" src={cross} alt="close" />
                                        </button>

                                        {/* Links */}
                                        <ul>
                                            <Link onClick={() => setMenu(false)} to={"/sing"}>
                                                <li className="border-b font-medium text-lg p-6">Sign in</li>
                                            </Link>
                                            <Link onClick={() => setMenu(false)} to={"/Product"}>
                                                <li className="border-b font-medium text-lg p-6">Shop</li>
                                            </Link>
                                            <Link onClick={() => setMenu(false)} to={"/Subscription"}>
                                                <li className="border-b font-medium text-lg p-6">Service</li>
                                            </Link>
                                            <Link onClick={() => setMenu(false)} to={""}>
                                                <li className="border-b font-medium text-lg p-6">Contact</li>
                                            </Link>
                                            <Link onClick={() => setMenu(false)} to={"/Ourstory"}>
                                                <li className="border-b font-medium text-lg p-6">About us</li>
                                            </Link>
                                        </ul>

                                        {/* Footer links */}
                                        <ul className="p-6">
                                            <li className="text-sm font-medium">Shipping & returns</li>
                                            <li className="mt-4 text-sm font-medium">Terms & conditions</li>
                                            <li className="mt-4 text-sm font-medium">Privacy policy</li>
                                        </ul>

                                        {/* Social icons */}
                                        <div className="flex justify-between py-6 px-6 w-full border-t border-black-black_header">
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img className="max-w-6 w-full" src={"/icons/Instagram.svg"} alt="icon" />
                                            </a>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <img className="max-w-6 w-full" src={"/icons/Pinterest.svg"} alt="icon" />
                                            </a>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <img className="max-w-6 w-full" src={"/icons/Facebook.svg"} alt="icon" />
                                            </a>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <img className="max-w-6 w-full" src={"/icons/Twitter.svg"} alt="icon" />
                                            </a>
                                            <a href="https://t.me/" target="_blank">
                                                <img className="max-w-6 w-full" src={"/icons/Telegram.svg"} alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border-l mr-[2px] border-black-black_header  py-4 px-4'>
                                <button onClick={() => setShop1(!shop1)} >
                                    <img onClick={() => setCard(!card)} className={`${shop1 ? "hidden" : "block"}`} src={shop} alt="shop" />
                                    <img onClick={() => setCard(false)} className={`max-w-6 w-full ${shop1 ? "block" : "hidden"} `} src={cross} alt="" />
                                </button>
                                {shop1 && (
                                    <>
                                        <div onClick={() => SetSlide(true)} className={`fixed top-0 h-full z-50 md:hidden transition-all duration-50 ${shop1 ? "" : ""}`} >
                                            <div className={` bg-white-white_color w-full max-w-[320px] flex  flex-col items-end  backdrop-blur-3xl  absolute top-0 right-0  border-black-black_header  ${shop1} `} >
                                                <div className='  w-full flex justify-end'>
                                                    <button className=' p-[18.5px] ' onClick={() => setShop1(!shop1)}>
                                                        <img className={`max-w-6 w-full ${card ? "block" : "hidden"} `} src={cross} alt="" />
                                                    </button>
                                                </div>
                                                <div className=' '>
                                                    <ul className='p-6 ' >
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>

                    <div className='fixed top-0 left-0 right-0 w-full bg-white-white_color  z-10'>
                        <div className={`${card ? "hidden" : "block"} overflow-y-auto   h-screen bg-opacity-100 backdrop-blur-sm z-40  
                        lg:w-[50%] w-full lg:max-w-[720px]  bg-white-white_color justify-self-end absolute top-[1px] border-r  border-t-0 border-black-black_header border-b-0 `}>
                            <div onClick={(e) => e.preventDefault()} className=' border-l sticky border-0 border-black-black_header '>
                                <div className='flex justify-between sm:px-10 px-4 top-0 md:py-[29.5px] py-[18.5px]' onClick={() => setCard(!card)}>
                                    <h1>Shopping Cart</h1>
                                    <img onClick={() => setCard(true)} className={` `} src={close} alt="" />
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
                                                <h1 className={` font-semibold text-base leading-[120%] text-gray-gray_color`}>Remove</h1>
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

                                        <textarea className='outline-none text-gray-gray_color font-normal w-full text-base pb-24 leading-[140%] ' name="Gift Message" placeholder='Gift Message' ></textarea>

                                    </div>
                                </div>
                                <div className='py-10 sm:px-10 px-4   border-t border-black-black_header'>
                                    <div className='text-center'>
                                        <h1 className='font-normal text-sm leading-[120%] text-black-black_header '>Shipping & taxes calculated at checkout <br /> Free standard shipping within Kyiv</h1>
                                    </div>
                                </div>
                                <div onClick={() => setCard(!card)} className=''>
                                    <div onClick={() => setCard(tue)} className='bg-black-black_header text-center'>
                                        <Link to={"/Contatinfo"}>  <button className='text-white-white_color my-[19px] font-medium text-base leading-[120%]'>CHECK OUT</button></Link>
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


