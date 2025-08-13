import React, { useState } from 'react'
import image1 from "/public/image/img hero.svg"
import Product from "../json/banner.json";
import image2 from "/public/icons/arrow_right1.svg";
import image3 from "/public/icons/arrow_left2.svg";
import { Link } from 'react-router-dom';


const Head = () => {
    // const [active, setActive] = useState(false)
    const data=[
        {
            "image":"/public/image/card_item.png",
            "text":"Fresh Flowers",
            "button_text":"Shop now",
            "arroy":"arrow_right1.svg" 
            
        },
        {
            "image":"/public/image/card_item1.png",
            "text":"Dried Flowers",
            "button_text":"Shop now",
            "arroy":"arrow_left2.svg"
        },
        {
            "image":"/public/image/card_item2.png",
            "text":"Live Plants ",
            "button_text":"Shop now",
            "arroy":"arrow_right1.svg"
        },
        {
            "image":"/public/image/card_item3.png",
            "text":"Aroma Candels",
            "button_text":"Shop now",
            "arroy":"arrow_left2.svg"
        },
        {
            "image":"/public/image/card_item4.png",
            "text":"Fresheners",
            "button_text":"Shop now",
            "arroy":"arrow_right1.svg"
        }
    ]
    return (
        <>
            <div className='md:mt-[83px] mt-[62px]'>
                <div className='container'>
                    <div className='border  border-black-black_header border-t-0  border-b-0 grid lg:grid-cols-2  relative'>
                        <div className='  border-black-black_header lg:border-b '>
                            <div className='border-0  justify-items-center border-black-black_header sticky top-[83px]  '>

                                <div className=' py-10 sm:py-[78px]  px-4 '>
                                    <div className=' max-w-[343px]  sm:max-w-[560px] '>
                                        <h1 className=' font-semibold leading-[140%] text-black-black_header text-[40px] sm:text-[67px] max-w-[200px] '>Kyiv LuxeBouquets</h1>
                                        <p className='font-normal text-sm leading-[120%] mt-4 text-black-black_header sm:text-lg'>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                                    </div>
                                    <div className=' grid grid-cols-2  mt-6 border-t-[1px] border-solid border-black-black_header sm:mt-[54px] '>
                                        <div className='mt-4 mr-4 sm:mt-6 sm:mr-6'>
                                            < img className=' ' src={image1} alt="image1" />
                                        </div>
                                        <div className=' border-l-[1px] border-solid border-black-black_header mt-4 sm:mt-6 '>
                                            <p className='text-black-black_header max-w-[262px] items-end justify-items-end flex h-full font-normal text-[11px] leading-[120%] pl-4 sm:pl-8 sm:text-sm '>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >

                            <div className='lg:border-t-0 border-t border-black-black_header'>
                                {

                                    data.map((items, index) => {

                                        if (index % 2 === 0) {
                                            return (<>

                                                <div className='overflow-hidden  grid grid-cols-2'>
                                                    <div className='   border-b border-l-0 lg:border-l  border-black-black_header w-full text-center flex justify-center  '>
                                                        <div className="flex flex-col gap-1 justify-center items-center relative  h-[100%] ">
                                                            <h1 className='  font-medium text-[26px] leading-[120%]  text-black-black_header sm:text-[38px]'>{items.text}</h1>
                                                            <Link to={"/Product"}> 
                                                            <div className="flex gap-[7px]  items-center justify-self-center  absolute bottom-6   ">
                                                                <button className=' font-semibold text-sm leading-[13.02%] text-black-black_header sm:text-base ' > {items.button_text} </button>
                                                                <img className='pt-[3.5px] ' src={image2} alt="" />
                                                            </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='border-l group  transform-all duration-500 overflow-hidden border-b border-black-black_header '>
                                                        <img className={`transition-all group-hover:scale-110 duration-300 w-full `} src={`${items.image}`} alt="" />
                                                    </div>
                                                </div>
                                            </>)
                                        } else {

                                            return (
                                                <>
                                                    <div className='overflow-hidden  grid grid-cols-2'>
                                                        <div className='border-l-0 lg:border-l group border-b border-black-black_header transform-all duration-500 overflow-hidden  '>
                                                            <img className={`transition-all group-hover:scale-110 duration-300  w-full`} src={`${items.image}`} alt="" />
                                                        </div>
                                                        <div className='   border-b border-l border-black-black_header w-full text-center flex justify-center  '>
                                                            <div className="flex flex-col gap-1 justify-center items-center relative   h-[100%]">
                                                                <div>

                                                                    <h1 className='  font-medium text-[26px] leading-[120%]   text-black-black_header  sm:text-[38px] '>{items.text}</h1>
                                                                </div>
                                                                <Link to={"/Product"}>
                                                                    <div className=" flex gap-[7px] mr-[100px] md:left-[74px] left-10  max-w-26   absolute bottom-6 w-full">
                                                                        <img className='pt-[3.5px]  ' src={image3} alt="" />
                                                                        <button className=' font-semibold text-sm leading-[13.02%] text-black-black_header sm:text-base ' > {items.button_text} </button>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Head