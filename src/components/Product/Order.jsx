import React, { useRef, useState } from 'react'
import lefcolum from '../../assets/image/leftcolum.png'
import productitem1 from '../../assets/image/productitem1.png'
import productitem2 from '../../assets/image/productitem2.png'
import productitem3 from '../../assets/image/productitem3.png'
import productitem4 from '../../assets/image/productitem4.png'
import leftarrow from "../../assets/icons/darkleftarrow.svg"
import rightarrow from "../../assets/icons/darkrightarrow.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const vases = [
    { name: "Glass Vase", price: "$15", img: "producttop1.png" },
    { name: "Hammershoi", price: "$45", img: "producttop2.png" },
    { name: "Ceramic Vase", price: "$35", img: "producttop3.png" },
    { name: "Steel vase", price: "$25", img: "producttop4.png" },
    { name: "Bamboo", price: "$36", img: "producttop5.png" },
];
export const Order = () => {

    const swiperRef = useRef();
    const [selectedOption, setSelectedOption] = useState("one-time");
    const [quantity, setQuantity] = useState(1)

    const products = [
        {
            name: "Glass Vase",
            price: "$15",
            image: "producttop1.png",
        },
        {
            name: "Hammershoi",
            price: "$45",
            image: "/images/hammershoi.png",
        },
        {
            name: "Ceramic Vase",
            price: "$35",
            image: "/images/ceramic.png",
        },
        {
            name: "Steel vase",
            price: "$25",
            image: "/images/steel.png",
        },
        {
            name: "Bamboo",
            price: "$36",
            image: "/images/bamboo.png",
        },
    ];
    const value = [
        {
            title: "Rattan Grapefruit",
            img: productitem1,
            price: "price 48$"
        },
        {
            title: "Lime & Matcha",
            img: productitem2,
            price: "price 46$"
        },
        {
            title: "Cedar & Lavender",
            img: productitem3,
            price: "price 64$"
        },
        {
            title: "Ocean Mist",
            img: productitem4,
            price: "price 58$"
        }
    ]
    return (
        <>
            <div className='md:mt-[83px] mt-[62px]'>
                <div className='container'>
                    <div className='border border-y-0 border-black-black_header'>
                        <div className='grid lg:grid-cols-2 grid-cols-1 border-black-black_header '>
                            <div>
                                <img className='h-full w-full' src={lefcolum} alt="" />
                            </div>
                            <div className='mb-10'>
                                <div className='my-10 ml-10 mr-10 ' >
                                    <p className=''>Bouquets Fresh Flowers / Rosy Delight</p>
                                    <div className='mt-6'>
                                        <h1 className='font-medium sm:text-[38px] text-[26px] leading-[120%] text-black-black_header' >Rosy Delight - $100</h1>
                                        <p className='mt-4 font-normal sm:text-base text-xs leading-[140%]'>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p>
                                    </div>
                                    <div className='flex mt-6 gap-4 items-center'>
                                        <div>
                                            <h1 className='font-medium text-lg text-black-black_header'>Quantity</h1>
                                        </div>
                                        <div className="flex justify-between items-center border border-black-black_header max-w-[343px] sm:max-w-[146px] w-full">
                                            <button className="px-3 py-2" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} > - </button>
                                            <div className=" max-w-[255px] w-full px-4 py-2 border-x border-black-black_header  text-center">
                                                <p>{quantity}</p>
                                            </div>
                                            <button className="px-3 py-2" onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)} > + </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='mx-4 '>
                                    <div className='flex  justify-between mx-[10px]'>
                                        <h1 className='font-medium text-lg leading-[140%] mt-2 sm:mt-0 text-black-black_header '>Excellent Combination with:</h1>
                                        <h1 className='font-normal text-base leading-[140%] text-gray-gray_color'>Vase Not Included</h1>
                                    </div>


                                    <div className="mt-4">

                                        <div className=" w-full flex items-center gap-[16px]">

                                            <button
                                                className={`flex items-center justify-center w-[32px] h-[32px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300`}
                                                onClick={() => swiperRef.current?.slidePrev()}
                                            >
                                                <img
                                                    src={leftarrow}
                                                    alt="left"
                                                />

                                            </button>
                                            <Swiper
                                                slidesPerView={2}
                                                loop={true}
                                                spaceBetween={10}
                                                modules={[Navigation]}
                                                onBeforeInit={(swiper) => {
                                                    swiperRef.current = swiper;
                                                }}
                                                breakpoints={{
                                                    0: {
                                                        slidesPerView: 1,
                                                    },
                                                    500: { slidesPerView: 2, },
                                                    640: {
                                                        slidesPerView: 3,
                                                    },
                                                    768: {
                                                        slidesPerView: 5,

                                                    },
                                                    1024: {
                                                        slidesPerView: 3,
                                                    },
                                                    1200: {
                                                        slidesPerView: 5,
                                                    }
                                                }}
                                                className="mySwiper"
                                            >
                                                {vases.map((vases, index) => (
                                                    <>
                                                        <SwiperSlide key={index}>
                                                            <div className="  bg-white ">
                                                                <img src={`src/assets/image/${vases.img}`} alt={vases}
                                                                    className=" mb-2 w-full max-w-[360px]  h-f object-cover "
                                                                />
                                                                <p className="text-sm font-medium">{vases.name}</p>
                                                                <span className="text-gray-600 text-sm">{vases.price}</span>
                                                            </div>
                                                        </SwiperSlide>
                                                    </>
                                                ))}

                                            </Swiper>
                                            <button
                                                className=" flex items-center justify-center w-[32px] h-[32px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                                                onClick={() => swiperRef.current?.slideNext()}
                                            >
                                                <img
                                                    src={rightarrow}
                                                    alt="right"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">

                                        <h2 className="font-medium text-lg mb-4">Price options</h2>

                                        <div className="flex flex-col gap-4">
                                            <label className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="price"
                                                    value="one-time"
                                                    checked={selectedOption === "one-time"}
                                                    onChange={() => setSelectedOption("one-time")}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="text-base font-normal leading-[140%]">One time purchase. Price $100</span>
                                            </label>

                                            <label className="flex b items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="price"
                                                    value="subscribe"
                                                    checked={selectedOption === "subscribe"}
                                                    onChange={() => setSelectedOption("subscribe")}
                                                    className="w-5 h-5 text-black-black_header "
                                                />
                                                <span className="text-base font-normal leading-[140%]">Subscribe now, and save 25% on this order.</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='ml-10 mr-5 mt-10 bg-black-black_header justify-items-center' >
                                    <button className=' text-white-white_color justify-items-center flex font-medium text-base leading-[120%] py-[19px] '> Add to basket  </button>
                                </div>
                            </div>

                        </div>

                        <div className=' '>
                            <div className='border-t border-black-black_header' >
                                <h1 className='my-20 font-medium text-[38px] leading-[120%] text-black-black_header text-center'>You may also like…</h1>
                            </div>
                            <div className='grid md:grid-cols-2 xl:grid-cols-4  grid-cols-1'>
                                {
                                    value.map((item, index) => (
                                        
                                        < div className=' border-r border-t border-black-black_header'>
                                            {
                                                
                                                index === 3 ?

                                                    <div key={item + index}
                                                        className="max-w-[360px] h-[360px] bg-center bg-cover w-full justify-self-center  border-black-black_header flex flex-col justify-end text-center overflow-hidden"
                                                        style={{ backgroundImage: `url(${item.img})` }}
                                                    >
                                                        <div className="bg-white bg-opacity-80 py-4">
                                                            <h1 className="text-base font-medium text-black">{item.title}</h1>
                                                            <p className="text-sm text-gray-600">{item.price}</p>
                                                        </div>
                                                    </div> :
                                                    <div key={item + index}
                                                        className="max-w-[360px] h-[360px] bg-center bg-cover w-full justify-self-center   border-black-black_header flex flex-col justify-end text-center overflow-hidden"
                                                        style={{ backgroundImage: `url(${item.img})` }}
                                                    >
                                                        <div className="bg-white bg-opacity-80 py-4">
                                                            <h1 className="text-base font-medium text-black">{item.title}</h1>
                                                            <p className="text-sm text-gray-600">{item.price}</p>
                                                        </div>
                                                    </div>
                                            }

                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                </div >
            </div>

        </>
    )
}
